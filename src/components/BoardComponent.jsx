import React, { useState, useEffect } from 'react'
import BoardItemComponent from './BoardItemComponent.jsx'
import AddStreamer from './forms/AddStreamer.jsx'
import { Streamer } from '../models/streamer.class'
import ListStreamers from './ListStreamers.jsx';
import Header from './pure/Header.jsx';
import GameOver from './gameInfo/GameOver.jsx';
import allStreamers from "../streamerInfo.json";
import { updateLocalStorage, localStoragedefault } from '../utils/LocalStorage.jsx';
import { getRandomStreamer } from '../utils/GetRandomStreamer.jsx';

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

function createStreamer(streamer) {
    const age = ageCalculate(streamer.birthday)
    return new Streamer(streamer.id, streamer.name, age, streamer.followers, streamer.gender, streamer.city, streamer.platform)
}

function BoardComponent() {
    const tryNumbers = 5;
    const [streamerGuess, setStreamerGuess] = useState()
    const [valueInput, setValueInput] = useState('')
    const [tryStreamers, setTryStreamers] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [isWon, setIsWon] = useState(false)
    const [showGameOver, setShowGameOver] = useState(false)

    const handleCloseGameOver = () => setShowGameOver(false);

    useEffect(() => {
        const statsLocal = JSON.parse(localStorage.getItem('stats'));

        if (!statsLocal) {
            localStoragedefault()
        }

        setStreamerGuess(createStreamer(getRandomStreamer()))
    }, []);

    function boardAddStreamer(tryStreamer) {
        const tryStreamersTemp = [...tryStreamers, createStreamer(allStreamers[tryStreamer.id])]
        const isWonTry = streamerGuess.id === tryStreamer.id

        setTryStreamers(tryStreamersTemp)
        setValueInput('')

        if (isWonTry || tryStreamersTemp.length === tryNumbers) {
            updateLocalStorage(isWonTry, streamerGuess, tryStreamersTemp)
            setIsWon(isWonTry)
            setGameOver(true)
            setShowGameOver(true)
        }
    }

    function changeInput(value) {
        setValueInput(value)
    }

    return (
        <div className='board'>
            <Header />
            <AddStreamer uploadInput={changeInput} valueInput={valueInput} disabled={gameOver} />
            {valueInput ?
                <ListStreamers selectStreaamer={boardAddStreamer} value={valueInput} /> : null
            }
            {gameOver && streamerGuess ?
                <p className='game-result'>
                    {isWon ? '¡Lo has adivinado! Era ' : 'Esta vez no ha podido ser. Era '}
                    <strong>{streamerGuess.name}</strong>
                </p>
                : null
            }
            <BoardItemComponent streamers={tryStreamers} streamerGuess={streamerGuess} />
            {
                showGameOver ?
                    <GameOver show={showGameOver} handleClose={handleCloseGameOver} />
                    : null}
        </div>
    )
}

export default BoardComponent
