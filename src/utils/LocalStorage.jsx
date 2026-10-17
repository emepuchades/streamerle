
export function localStoragedefault() {
    localStorage.setItem('stats', JSON.stringify(
        {
            gamesWon: 0,
            winRate: 0,
            currentStreak: 0,
            betterStreak: 0,
        }));
    localStorage.setItem('gameWons', JSON.stringify(0));
    localStorage.setItem('gamePlays', JSON.stringify(0));
    localStorage.setItem('winRate', JSON.stringify([0, 0, 0, 0, 0]));
    localStorage.setItem('winTry', JSON.stringify([0, 0, 0, 0, 0]));
    localStorage.setItem('percentageWinRate', JSON.stringify([0, 0, 0, 0, 0]));
}

export function updateLocalStorage(isWon, streamerGuess, tryStreamers) {
    const statsLocal = JSON.parse(localStorage.getItem('stats'));
    const numGames = JSON.parse(localStorage.getItem('gamePlays'));
    const gameWon = JSON.parse(localStorage.getItem('gameWons'));

    localStorage.setItem('lastGameDate', JSON.stringify(new Date()));
    localStorage.setItem('lastStreamer', JSON.stringify(streamerGuess.name));
    localStorage.setItem('lastTries', JSON.stringify(tryStreamers.map((streamer) => streamer.id)));
    localStorage.setItem('isWon', JSON.stringify(isWon));
    localStorage.setItem('gamePlays', JSON.stringify(numGames + 1));

    if (isWon) {
        localStorage.setItem('gameWons', JSON.stringify(gameWon + 1));
        winRateTrys(tryStreamers)
    }

    updateStats(statsLocal, isWon)
}

export function getTodayGame() {
    const lastGameDate = JSON.parse(localStorage.getItem('lastGameDate'));

    if (!lastGameDate || new Date(lastGameDate).toDateString() !== new Date().toDateString()) {
        return null
    }

    return {
        isWon: JSON.parse(localStorage.getItem('isWon')),
        tryIds: JSON.parse(localStorage.getItem('lastTries')) || [],
    }
}

function updateStats(oldStats, isWon) {
    const gameWon = JSON.parse(localStorage.getItem('gameWons'));
    const gamePlays = JSON.parse(localStorage.getItem('gamePlays'));
    const winrate = (gameWon / gamePlays) * 100;

    if (isWon) {
        oldStats.gamesWon = oldStats.gamesWon + 1;
        oldStats.currentStreak = oldStats.currentStreak + 1;
    } else {
        oldStats.currentStreak = 0
    }

    if (oldStats.currentStreak > oldStats.betterStreak) {
        oldStats.betterStreak = oldStats.currentStreak
    }

    oldStats.winRate = winrate.toFixed(0)
    localStorage.setItem('stats', JSON.stringify(oldStats));
}

function winRateTrys(tryStreamers) {
    const winDistribution = JSON.parse(localStorage.getItem('winRate'));
    const numTry = tryStreamers.length

    const newWin = winDistribution.map((attempt, index) => {
        if (numTry - 1 === index) {
            return attempt + 1
        }
        return attempt
    })

    localStorage.setItem('winRate', JSON.stringify(newWin));
}
