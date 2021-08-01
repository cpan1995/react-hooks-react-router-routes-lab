import React from "react";
import { directors } from "../data";
import { v4 as uuidv4 } from 'uuid';

function Directors() {
  let newDirectors = []
  newDirectors = directors.map(director => {
    return(
      <div key = {director.name}>
        <h2>Director: {director.name}</h2>
        <p>
          Movies:{
            director.movies.map((movie, index) => {
              return (
                <li key={movie+index}>{movie}</li>
              )
            })
          }
        </p>
      </div>
    )
  })

  return (
  <div>
    <h1>Directors Page</h1>
    {newDirectors}
  </div>)
}

export default Directors;
