import React from 'react'
import ReactCountryFlag from "react-country-flag";

function Item({ streamer, streamerGuess }) {

    function nFormatter(num) {
        const lookup = [
            { value: 1, symbol: "" },
            { value: 1e3, symbol: "k" },
            { value: 1e6, symbol: "M" },
            { value: 1e9, symbol: "G" },
            { value: 1e12, symbol: "T" },
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function (item) {
            return num >= item.value;
        });
        return item ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol : "0";
    }

    function getPlatform(platform) {
        switch (platform) {
            case 'TW':
                return <i className="bi bi-twitch"></i>;
            default:
                return <i className="bi bi-youtube"></i>
        }
    }

    function getArrow(tryValue, guessValue) {
        if (parseInt(tryValue) === parseInt(guessValue)) {
            return null
        }
        return parseInt(guessValue) < parseInt(tryValue) ? <i className="bi bi-arrow-down"></i> : <i className="bi bi-arrow-up"></i>
    }

    return (
        <div className="container-board-answers">
            <div className="container-name">
                <div className="name-streamer">
                    {streamer.name}
                </div>
            </div>
            <div className="container-answer">
                <div className={parseInt(streamer.birthday) === parseInt(streamerGuess.birthday) ? 'answer success' : 'answer color-answer'} >
                    {getArrow(streamer.birthday, streamerGuess.birthday)}
                    {streamer.birthday}
                </div>
            </div>
            <div className="container-answer">
                <div className={parseInt(streamer.followers) === parseInt(streamerGuess.followers) ? 'answer success' : 'answer color-answer'}>
                    {getArrow(streamer.followers, streamerGuess.followers)}
                    {nFormatter(streamer.followers)}
                </div>
            </div>
            <div className='container-answer'>
                <div className={streamer.gender === streamerGuess.gender ? 'answer success' : 'answer error'}>
                    {streamer.gender === 'F' ? 'Mujer' : 'Hombre'}
                </div>
            </div>
            <div className='container-answer'>
                <div className={streamer.platform === streamerGuess.platform ? 'answer success' : 'answer error'}>
                    {getPlatform(streamer.platform)}
                </div>
            </div>
            <div className='container-answer'>
                <div className={streamer.city === streamerGuess.city ? 'answer success' : 'answer error'}>
                    <ReactCountryFlag
                        countryCode={streamer.city}
                        svg
                        title={streamer.city}
                        style={{ width: '2.2em', height: '1.65em', borderRadius: '5px', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Item