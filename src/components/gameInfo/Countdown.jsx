import React from 'react'
import Countdown, { zeroPad } from 'react-countdown';

function CountdownCompoent() {
    const nextGame = new Date().setHours(24, 0, 0, 0)

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <p>Ya puedes jugar tontito</p>;
        } else {
            return <span>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
        }
    };

    return (
        <div>
            <Countdown
                date={nextGame}
                renderer={renderer}
            />
        </div>
    )
}

export default CountdownCompoent