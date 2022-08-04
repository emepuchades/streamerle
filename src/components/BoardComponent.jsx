import React, { useState, useEffect } from 'react'
import BoardItemComponent from './pure/BoardItemComponent.jsx'
import AddStreamer from './forms/AddStreamer.jsx'
import { Streamer } from '../models/streamer.class'
import allStreamers from "../streamerInfo.json";
import ListStreamers from './pure/ListStreamers.jsx';
import Header from './pure/Header.jsx';
import GameOver from './pure/gameInfo/GameOver.jsx';

function BoardComponent() {
    const tryNumbers = 5;
    const [streamerGuess, setStreamerGuess] = useState()
    const [valueInput, setValueInput] = useState('')
    const [tryStreamers, setTryStreamers] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [stats, setStats] = useState([0, 0, 0, 0]);

    const isModalShow = () => setGameOver(!gameOver);

    useEffect(() => {
        const min = 0;
        const max = 5;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        const streamer = allStreamers[rand]
        const age = ageCalculate(streamer.birthday)

        const statsLocal = JSON.parse(localStorage.getItem('stats'));
        if (statsLocal) {
            setStats(statsLocal);
        } else {
            localStorage.setItem('stats', JSON.stringify([0, 0, 0, 0]));
            localStorage.setItem('gameWons', JSON.stringify(0));
            localStorage.setItem('gamePlays', JSON.stringify(0));
        }

        return (
            setStreamerGuess(new Streamer(streamer.id, streamer.name, age, streamer.followers, streamer.gender, streamer.city, streamer.platform)
            )
        )
    }, []);




    function updateLocalStorage(isWon) {
        const statsLocal = JSON.parse(localStorage.getItem('stats'));
        const numGames = JSON.parse(localStorage.getItem('gamePlays'));
        const gameWon = JSON.parse(localStorage.getItem('gameWons'));

        localStorage.setItem('lastGameDate', JSON.stringify(new Date()));
        localStorage.setItem('lastStreamer', JSON.stringify(streamerGuess.name));
        localStorage.setItem('isWon', JSON.stringify(isWon));
        if(isWon){localStorage.setItem('gameWons', JSON.stringify(gameWon + 1));}
        localStorage.setItem('gamePlays', JSON.stringify(numGames + 1));
        
        updateStats(statsLocal, isWon)
    }

    function updateStats(oldStats, isWon) {
        const newStats = []
        console.log(oldStats)
        const gameWon = JSON.parse(localStorage.getItem('gameWons'));
        const gamePlays = JSON.parse(localStorage.getItem('gamePlays'));
        const winrate = (gameWon / gamePlays) * 100;
        
        newStats.push(oldStats[0] + 1)
        newStats.push(winrate.toFixed(0))
        
        isWon ?
            newStats.push(oldStats[2] + 1)
            : newStats.push(0)
        
        if(oldStats[3] < newStats[2])  {
            newStats.push(newStats[2])
        } else {
            newStats.push(oldStats[3])
        }

        localStorage.setItem('stats', JSON.stringify(newStats));
    }

    function boardAddStreamer(tryStreamer) {
        if (streamerGuess.name.toLowerCase() === tryStreamer.name.toLowerCase()) {
            updateLocalStorage(true)
            setGameOver(true)
        } else {

            if (tryStreamers.length < tryNumbers) {
                findStreamer(tryStreamer.id)
            } else {
                updateLocalStorage(false)
                setGameOver(true)
            }
        }
    }

    function ageCalculate(date) {
        var today = new Date();
        var birthday = new Date(date);
        var age = today.getFullYear() - birthday.getFullYear();
        var m = today.getMonth() - birthday.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }

        return age;
    }

    function findStreamer(id) {
        const foundStreamer = allStreamers[id]
        const tryStreamersTemp = [...tryStreamers]
        const age = ageCalculate(foundStreamer.birthday)
        const newStreamerTry = new Streamer(foundStreamer.id, foundStreamer.name, age, foundStreamer.followers, foundStreamer.gender, foundStreamer.city, foundStreamer.platform)
        tryStreamersTemp.push(newStreamerTry)
        setTryStreamers(tryStreamersTemp)
        setValueInput('')
    }

    function changeInput(value) {
        setValueInput(value)
    }

    return (
        <div className='board'>
            <Header />
            <AddStreamer uploadInput={changeInput} value={valueInput} />
            {valueInput ?
                <ListStreamers selectStreaamer={boardAddStreamer} value={valueInput} /> : null
            }
            <BoardItemComponent streamers={tryStreamers} streamerGuess={streamerGuess} />
            {
                gameOver ?
                    <GameOver show={gameOver} handleClose={isModalShow} />
                : null}
        </div>
    )
}

export default BoardComponent

