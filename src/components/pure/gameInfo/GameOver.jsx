import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function GameOver({ show, handleClose }) {
  const statsLocal = JSON.parse(localStorage.getItem('stats'));

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Streamle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Estadisticas</p>
          {statsLocal ?
            statsLocal.map((stats, index) => {
              return (
                <div key={index} className='stats-info'> {stats} </div>
              )
            })
            : null}
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
