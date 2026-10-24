import React from 'react'
import {
    XShareButton,
    XLegacyIcon,
    WhatsappShareButton,
    WhatsappLegacyIcon,
    TelegramShareButton,
    TelegramLegacyIcon
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
                <XShareButton
                    text={shareResult}
                    url={urlGame}>
                    <XLegacyIcon size={40} round={true} className='icons-share' />
                </XShareButton>

                <WhatsappShareButton
                    message={shareResult}
                    url={urlGame}
                    separator={''}>
                    <WhatsappLegacyIcon size={40} round={true} className='icons-share' />
                </WhatsappShareButton>

                <TelegramShareButton
                    text={shareResult}
                    url={urlGame}>
                    <TelegramLegacyIcon size={40} round={true} className='icons-share' />
                </TelegramShareButton>
            </div>
        </div>
    )
}

export default ShareButtons
