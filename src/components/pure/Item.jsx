import React from 'react'
import ReactCountryFlag from "react-country-flag";

function Item({index, streamer, streamerGuess}) {
   
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
        return item ? (num / item.value).toFixed(0).replace(rx, "$1") + item.symbol : "0";
    }

    function getPlatform(platform) {
        switch (platform) {
            case 'TW':
                return <i className="bi bi-twitch"></i>;
            default:
                return <i className="bi bi-youtube"></i>
        }
    }

    return (
        <div className="container-board-answers" key={index}>
            <div className="container-name">
                <div className="name-streamer">
                    {streamer.name}
                </div>
            </div>
            <div className="continer-answer">
                <div className={streamer.birthday === streamerGuess.birthday ? 'answer suucess' : 'answer color-answer'} >
                    {streamer.birthday === streamerGuess.birthday ? null :
                        streamerGuess.birthday < streamer.birthday ? <i className="bi bi-arrow-down"></i> : <i className="bi bi-arrow-up"></i>}
                    {streamer.birthday}
                </div>
            </div>
            <div className="continer-answer">
                <div className="answer color-answer">
                    {parseInt(streamerGuess.followers) < parseInt(streamer.followers) ? <i className="bi bi-arrow-down"></i> : <i className="bi bi-arrow-up"></i>}
                    {nFormatter(streamer.followers, streamer.followers.length)}
                </div>
            </div>
            <div className='continer-answer'>
                <div className={streamer.gender === streamerGuess.gender ? 'answer suucess' : 'answer error'}>
                    {streamer.gender}
                </div>
            </div>
            <div className='continer-answer'>
                <div className={streamer.platform === streamerGuess.platform ? 'answer suucess' : 'answer error'}>
                    {getPlatform(streamer.platform)}
                </div>
            </div>
            <div className='continer-answer'>
                <div className={streamer.city === streamerGuess.city ? 'answer suucess' : 'answer error'}>
                    <ReactCountryFlag countryCode={streamer.city} />
                </div>
            </div>
        </div>
    )
}

export default Item