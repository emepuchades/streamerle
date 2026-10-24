import React from 'react'
import startLogo from '../assets/icon-start.png';
import Item from './Item';

function BoardItemComponent({ streamers, streamerGuess, tryNumbers }) {

    return (
        <div>
            {streamers.length === 0 ?
                <div className='before-start'>
                    <img className='img-start' src={startLogo} alt="Logo" />
                    <p className='text-before-start'> Escribe y busca un streamer para empezar la partida </p>
                </div>
                :
                <div className='container-board' >
                    <div className="width-full">
                        <div className='container-mb'>
                            <p className='tries-info'>Intento {streamers.length} de {tryNumbers}</p>
                            <div className="answers-labels" >
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
                            {streamers.map((streamer, index) => {
                                return (
                                    <div key={index}>
                                        <Item streamer={streamer} streamerGuess={streamerGuess} />
                                    </div>
                                )

                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default BoardItemComponent
