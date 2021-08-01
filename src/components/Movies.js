import React from "react";
import { movies } from "../data";

function Movies() {
  let newMovies = [];
  newMovies = movies.map(movie => {
    return(
      <div key={movie.title}>
        <h2>Title: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>Genres: 
          {
            movie.genres.map(genre => {
              return (<li key = {genre+movie.title}>{genre}</li>)
            })
          } 
        </p>
      </div>
    )
  })

  return (
  <div>
    <h1>Movies Page</h1>
    {newMovies}
  </div>)
}

export default Movies;
