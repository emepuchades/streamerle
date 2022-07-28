import React from 'react'

function BoardItemComponent({ streamers, streamerGuess }) {
    return (
        <div>
            {streamers.length === 0 ?
                <p> Busca un streamer para empezar la partida </p>
                :
                <div className='container-board sm:mt-6' >
                    <div className="width-full">
                        <div>
                            {streamers.map((streamer, index) => {
                                return (
                                    <div className="container-board-answers" key={index}>
                                        <div className="container-name">
                                            <div className="name-streamer">
                                                {streamer.name}
                                            </div>
                                        </div>
                                        <div className="continer-answer">
                                            <div className="answer color-answer">
                                                {streamerGuess.age > streamer.age ? <i class="bi bi-arrow-down"></i> : <i class="bi bi-arrow-up"></i>}
                                                {streamer.birthday}
                                            </div>
                                        </div>
                                        <div className="continer-answer">
                                            <div className="answer color-answer">
                                                {streamerGuess.followers > streamer.followers ? <i class="bi bi-arrow-down"></i> : <i class="bi bi-arrow-up"></i>}
                                                {streamer.followers}
                                            </div>
                                        </div>
                                        <div className='continer-answer'>
                                            <div className={streamer.gender === streamerGuess.gender ? 'answer suucess' : 'answer error'}>
                                                {streamer.gender}
                                            </div>
                                        </div>
                                        <div className='continer-answer'>
                                            <div className={streamer.city === streamerGuess.city ? 'answer suucess' : 'answer error'}>
                                                {streamer.city}
                                            </div>
                                        </div>
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
