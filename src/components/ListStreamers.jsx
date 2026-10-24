import React, { useEffect, useState } from 'react'
import allStreamersList from "../streamerList.json";

function ListStreamers({ selectStreaamer, value, tryStreamers }) {
  const [filteredStreamers, setFilteredStreamers] = useState()

  useEffect(() => {
    setFilteredStreamers(
      allStreamersList.filter(
        (streamers) =>
          streamers.name.toLowerCase().includes(value.toLowerCase()) &&
          !tryStreamers.some((tryStreamer) => tryStreamer.id === streamers.id)
      )
    );
  }, [value, tryStreamers]);

  return (
    <div className="list-group list-streamers">
      {filteredStreamers ?
        filteredStreamers.length > 0 ?
          filteredStreamers.map((streamer) => {
            return (
              <button type="button" className="list-group-item list-group-item-action" onClick={() => selectStreaamer({ id: streamer.id, name: streamer.name })} key={streamer.id}>{streamer.name}</button>
            )
          }) :
          <p className="list-streamers-empty">No hay ningún streamer con ese nombre</p>
        : null
      }
    </div>
  )
}

export default ListStreamers
