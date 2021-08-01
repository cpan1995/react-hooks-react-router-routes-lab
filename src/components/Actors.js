import React from "react";
import { actors } from "../data";

function Actors() {
  let newActors = []
  newActors = actors.map(actor => {
    return (
      <div key = {actor.name}>
        <h2>{actor.name}</h2>
        <p>Movies: 
          {
            actor.movies.map(movie => {
              return (
                <li key = {movie+actor.name}>{movie}</li>
              )
            })
          }
        </p>
      </div>
    )
  })
  return (
  <div>
    <h1>Actors Page</h1>
    {newActors}
  </div>)
}

export default Actors;
