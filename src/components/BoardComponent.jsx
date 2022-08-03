import React, { useState, useEffect } from 'react'
import BoardItemComponent from './pure/BoardItemComponent.jsx'
import AddStreamer from './forms/AddStreamer.jsx'
import { Streamer } from '../models/streamer.class'
import allStreamers from "../streamerInfo.json";
import ListStreamers from './pure/ListStreamers.jsx';
import Header from './pure/Header.jsx';

function BoardComponent() {
    const tryNumbers = 5;
    const [streamerGuess, setStreamerGuess] = useState()
    const [valueInput, setValueInput] = useState('')
    const [tryStreamers, setTryStreamers] = useState([])

    useEffect(() => {
        const min = 0;
        const max = 2;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        const streamer = allStreamers[rand]
        const age = ageCalculate(streamer.birthday)
        return (
            setStreamerGuess(new Streamer(streamer.id, streamer.name, age, streamer.followers, streamer.gender, streamer.city, streamer.platform)
            )
        )
    }, []);

    function boardAddStreamer(tryStreamer) {
        if (streamerGuess.name.toLowerCase() === tryStreamer.name.toLowerCase()) {
            alert('Has acertado')
        } else {

            if (tryStreamers.length < tryNumbers) {
                findStreamer(tryStreamer.id)
            } else {
                alert('No tienes mas intentos')
            }
        }
    }

    function ageCalculate(date) {
        var today = new Date();
        var birthday = new Date(date);
        console.log('birthdate', birthday)
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
        </div>
    )
}

export default BoardComponent

