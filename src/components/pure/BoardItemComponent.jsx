import React from 'react'
import startLogo from '../../assets/icon-start.png';
import ReactCountryFlag from "react-country-flag";

function BoardItemComponent({ streamers, streamerGuess }) {

    function nFormatter(num, digits) {
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
                return <i class="bi bi-twitch"></i>;
            default:
                return <i class="bi bi-youtube"></i>
        }
    }

    return (
        <div>
            {streamers.length === 0 ?
                <div className='before-start'>
                    <img className='img-start' src={startLogo} alt="Logo" />
                    <p className='text-before-start'> Escribe y busca un streamer para empezar la partida </p>
                </div>
                :
                <div className='container-board sm:mt-6' >
                    <div className="width-full">
                        <div className='container-mb'>
                            {streamers.map((streamer, index) => {
                                return (
                                    <div className="container-board-answers" key={index}>
                                        <div className="container-name">
                                            <div className="name-streamer">
                                                {streamer.name}
                                            </div>
                                        </div>
                                        <div className="continer-answer">
                                            <div className={streamer.age === streamerGuess.age ? 'answer suucess' : 'answer color-answer'} >
                                                {streamerGuess.age > streamer.age ? <i class="bi bi-arrow-down"></i> : <i class="bi bi-arrow-up"></i>}
                                                {streamer.birthday}
                                            </div>
                                        </div>
                                        <div className="continer-answer">
                                            <div className="answer color-answer">
                                                {streamerGuess.followers > streamer.followers ? <i class="bi bi-arrow-down"></i> : <i class="bi bi-arrow-up"></i>}
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
                                            {console.log('plataform', streamer.platform)}
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

                            })}
                            <div className="container-board-answers" >
                                <div className="default-answer">
                                    AÑOS
                                </div>
                                <div className="default-answer">
                                    SEGUIDORES
                                </div>
                                <div className='default-answer'>
                                    GÉNERO
                                </div>
                                <div className='default-answer'>
                                   PLATAFORMA
                                </div>
                                <div className='default-answer'>
                                    PAÍS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default BoardItemComponent
