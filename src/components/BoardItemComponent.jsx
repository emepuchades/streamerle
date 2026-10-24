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
                            <div className='tries-info'>
                                {[...Array(tryNumbers)].map((value, index) => {
                                    return (
                                        <span key={index} className={index < streamers.length ? 'try-dot try-dot-used' : 'try-dot'}></span>
                                    )
                                })}
                                <span className='tries-text'>{streamers.length}/{tryNumbers}</span>
                            </div>
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
                            {[...streamers].reverse().map((streamer) => {
                                return (
                                    <div key={streamer.id}>
                                        <Item streamer={streamer} streamerGuess={streamerGuess} />
                                    </div>
                                )

                            })}
                            <div className='legend'>
                                <span className='legend-item'><span className='legend-color success'></span>Correcto</span>
                                <span className='legend-item'><span className='legend-color error'></span>Incorrecto</span>
                                <span className='legend-item'><i className="bi bi-arrow-up"></i>Tiene más</span>
                                <span className='legend-item'><i className="bi bi-arrow-down"></i>Tiene menos</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default BoardItemComponent
