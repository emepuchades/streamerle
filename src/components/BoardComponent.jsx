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

function BoardComponent() {
    const tryNumbers = 5;
    const [streamerGuess, setStreamerGuess] = useState()
    const [valueInput, setValueInput] = useState('')
    const [tryStreamers, setTryStreamers] = useState([])
    const [gameOver, setGameOver] = useState(false)

    const isModalShow = () => setGameOver(!gameOver);

    useEffect(() => {
        const streamer = getRandomStreamer()
        const age = ageCalculate(streamer.birthday)
        const statsLocal = JSON.parse(localStorage.getItem('stats'));

        if (!statsLocal) {
            localStoragedefault()
        }

        return (
            setStreamerGuess(new Streamer(streamer.id, streamer.name, age, streamer.followers, streamer.gender, streamer.city, streamer.platform)
            )
        )
    }, []);

    function boardAddStreamer(tryStreamer) {
        if (streamerGuess.name.toLowerCase() === tryStreamer.name.toLowerCase()) {
            updateLocalStorage(true, streamerGuess, tryStreamers)
            setGameOver(true)
        } else {

            if (tryStreamers.length < tryNumbers) {
                findStreamer(tryStreamer.id)
            } else {
                updateLocalStorage(false, streamerGuess, tryStreamers)
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

