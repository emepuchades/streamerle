import React, { useEffect, useState } from 'react'
import allStreamersList from "../../streamerList.json";

function ListStreamers({ selectStreaamer, value }) {
  const [filteredStreamers, setFilteredStreamers] = useState()

  useEffect(() => {
    setFilteredStreamers(
      allStreamersList.filter(
        (streamers) =>
          streamers.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [value]);

  return (
    <div className="list-group container-board">
      {filteredStreamers ?
        filteredStreamers.map((streamer, index) => {
          return (
            <li className="list-group-item width-full" onClick={() => selectStreaamer({ id: streamer.id, name: streamer.name })} key={index}>{streamer.name}</li>
          )
        }) : null
      }
    </div>
  )
}

export default ListStreamers
