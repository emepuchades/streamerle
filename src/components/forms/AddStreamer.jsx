import React, { useRef } from 'react'

function AddStreamer({ uploadInput, valueInput, disabled }) {
    const nameRef = useRef('');

    function AddStreamer(e) {
        e.preventDefault();
        uploadInput(nameRef.current.value)
    }

    return (
        <form className='container-input' onSubmit={(e) => e.preventDefault()}>
            <i className="bi bi-search icon-search"></i>
            <input
                className='input-add-streamer'
                type="text"
                ref={nameRef}
                value={valueInput}
                onChange={AddStreamer}
                disabled={disabled}
                autoComplete='off'
                aria-label='Busca al streamer'
                placeholder={disabled ? 'Vuelve mañana para otra partida' : 'Busca al streamer'}
            />
        </form>
    )
}

export default AddStreamer
