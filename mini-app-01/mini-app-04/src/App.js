import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])

  function fetchMovieHandler() {
    fetch('https://swapi.dev/api/films/')
        .then(response => {
          return response.json()
        })
        .then(data => {
          const transformedMovies = data.results.map(movieDATA => {
            return {
              id: movieDATA.episode_id,
              title: movieDATA.title,
              openingText: movieDATA.opening_crawl,
              releaseDate: movieDATA.release_date
            }
          })
          setMovies(data.results)
        })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
