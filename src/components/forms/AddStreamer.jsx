import React, { useRef } from 'react'

function AddStreamer({ uploadInput, valueInput, disabled }) {
    const nameRef = useRef('');

    function AddStreamer(e) {
        e.preventDefault();
        uploadInput(nameRef.current.value)
    }
    return (
        <form className='container-input' onSubmit={(e) => e.preventDefault()}>
            <input className='input-add-streamer' type="text" ref={nameRef} value={valueInput} onChange={AddStreamer} disabled={disabled} placeholder={disabled ? 'Vuelve mañana para otra partida' : 'Busca al streamer'} />
        </form>
    )
}

export default AddStreamer

