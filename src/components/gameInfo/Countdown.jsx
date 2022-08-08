import React from 'react'
import Countdown from 'react-countdown';

function CountdownCompoent() {
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <p>Ya puedes jugar tontito</p>;
        } else {
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    };

    return (
        <div>
            <Countdown
                date={Date.now() + 10000}
                renderer={renderer}
            />
        </div>
    )
}

export default CountdownCompoent