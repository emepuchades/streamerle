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


function ShareButtons() {
    return (
        <div className='social-container'>
            <div className='countdown'>
                <p className='text-share'> Siguiente partida: </p>
                <CountdownCompoent />
            </div>
            <div className='share-buttons'>
                <p className='text-share'> Comparte el resultado: </p>
                <TwitterShareButton
                    title={'Streamle (numero de veces juigadas)'}
                    url={'http://streamle.com'}
                    via={'streamle'}>
                    <TwitterIcon size={40} round={true} className='icons-share'/>
                </TwitterShareButton>

                <WhatsappShareButton
                    title={'Streamle (numero de veces juigadas)'}
                    url={'http://streamle.com'}
                    via={'streamle'}>
                    <WhatsappIcon size={40} round={true} className='icons-share'/>
                </WhatsappShareButton>

                <TelegramShareButton
                    title={'Streamle (numero de veces juigadas)'}
                    url={'http://streamle.com'}>
                    <TelegramIcon size={40} round={true} className='icons-share'/>
                </TelegramShareButton>
            </div>
        </div>
    )
}

export default ShareButtons