import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ProgressBar } from 'react-bootstrap';
import ShareButtons from '../share/ShareButtons';

export default function GameOver({ show, handleClose, shareResult }) {
  const stats = JSON.parse(localStorage.getItem('stats'));
  const gamePlays = JSON.parse(localStorage.getItem('gamePlays'));
  const winRate = JSON.parse(localStorage.getItem('winRate'));
  const maxWins = winRate ? Math.max(...winRate, 1) : 1;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Streamerle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4>Estadísticas</h4>
            <table className='table stats-container' >
              <tbody>
                <tr>
                  {stats ?
                    <>
                      <td className='stats-info'> {gamePlays} </td>
                      <td className='stats-info'> {stats.winRate} %</td>
                      <td className='stats-info'> {stats.currentStreak} </td>
                      <td className='stats-info'> {stats.betterStreak} </td>
                    </>
                    : null
                  }

                </tr>
                <tr>
                  <td> Partidas Jugadas </td>
                  <td> Win Rate </td>
                  <td> Racha Actual </td>
                  <td> Mejor Racha </td>
                </tr>
              </tbody>
            </table>
            <div>
              <h4>Número de acierto por intento</h4>
              <div >
                {winRate ?
                  winRate.map((wins, index) => {
                    return (
                      <div className='stats-percentage' key={index}>
                        <div className='item-stats'>{index + 1}: </div>
                        <div className='stats-bar'><ProgressBar now={wins} max={maxWins} /></div>
                        <div className='item-stats'>{wins}</div>
                      </div>
                    )
                  })
                  :
                  <p> Todavía no tienes estadísticas. Selecciona un streamer para empezar la partida.</p>}
              </div>
            </div>
            {shareResult ?
              <div>
                <ShareButtons shareResult={shareResult} />
              </div>
              : null
            }
          </div>
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
