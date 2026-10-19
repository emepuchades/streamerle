
function compareNumber(tryValue, guessValue) {
    if (parseInt(tryValue) === parseInt(guessValue)) {
        return '🟩'
    }
    return parseInt(guessValue) < parseInt(tryValue) ? '⬇️' : '⬆️'
}

function compareValue(tryValue, guessValue) {
    return tryValue === guessValue ? '🟩' : '🟥'
}

export function getShareResult(isWon, tryStreamers, streamerGuess, tryNumbers) {
    const score = isWon ? tryStreamers.length : 'X'
    const rows = tryStreamers.map((streamer) => {
        return compareNumber(streamer.birthday, streamerGuess.birthday)
            + compareNumber(streamer.followers, streamerGuess.followers)
            + compareValue(streamer.gender, streamerGuess.gender)
            + compareValue(streamer.platform, streamerGuess.platform)
            + compareValue(streamer.city, streamerGuess.city)
    })

    return `Streamerle ${score}/${tryNumbers}\n\n${rows.join('\n')}\n\n`
}
