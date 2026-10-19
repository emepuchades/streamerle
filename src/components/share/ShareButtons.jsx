import React from 'react'
import {
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TelegramShareButton,
    TelegramIcon
} from 'react-share'
import CountdownCompoent from '../gameInfo/Countdown'

const urlGame = 'https://streamerle.vercel.app/'

function ShareButtons({ shareResult }) {
    return (
        <div className='social-container'>
            <div className='countdown'>
                <p className='text-share'> Siguiente partida </p>
                <CountdownCompoent />
            </div>
            <div className='share-buttons'>
                <p className='text-share'> Comparte el resultado </p>
                <TwitterShareButton
                    title={shareResult}
                    url={urlGame}>
                    <TwitterIcon size={40} round={true} className='icons-share' />
                </TwitterShareButton>

                <WhatsappShareButton
                    title={shareResult}
                    url={urlGame}
                    separator={''}>
                    <WhatsappIcon size={40} round={true} className='icons-share' />
                </WhatsappShareButton>

                <TelegramShareButton
                    title={shareResult}
                    url={urlGame}>
                    <TelegramIcon size={40} round={true} className='icons-share' />
                </TelegramShareButton>
            </div>
        </div>
    )
}

export default ShareButtons
