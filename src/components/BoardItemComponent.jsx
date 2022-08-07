import React from 'react'
import startLogo from '../assets/icon-start.png';
import Item from './Item';

function BoardItemComponent({ streamers, streamerGuess }) {

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
                                    <div key={index}>
                                        <Item streamer={streamer} streamerGuess={streamerGuess} />
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
