import React, { useRef } from 'react'

function AddStreamer({ uploadInput, valueInput }) {
    const nameRef = useRef('');

    function AddStreamer(e) {
        e.preventDefault();
        uploadInput(nameRef.current.value)
    }
    return (
        <form className='container-input'>
            <input className='input-add-streamer' type="text" ref={nameRef} value={valueInput} onChange={AddStreamer} placeholder='Busca al streamer' />
        </form>
    )
}

export default AddStreamer

