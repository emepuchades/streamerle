import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalGameInfo({ show, handleClose}) {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>¿Como jugar?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Dispones de 5 intentos para adivinar al streamer.
                    Para empezar el juego, tienes que escribir el nombre de un streamer y clicar en él.
                    Al elegir el streamer aparecerá lo siguiente:

                    Aquí tenéis 5 características de los streamers como es la edad, los seguidores(se cuentan los seguidores de la plataforma en la que hacen stream),
                    género, plataforma donde hace stream y país.

                    Si coinciden el streamer al que has elegido con el que tienes que adivinar, la característica se  aparecerá en verde, si no en rojo. Con la edad, si tiene
                    esa misma edad se  aparecerá en verde si no tendrás una flecha para saber si tiene más o menos años, pasa lo mismo con los seguidores.

                    Pon a prueba tus conocimientos de los streamers. ¡A jugar!

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        ¡A jugar!
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ModalGameInfo