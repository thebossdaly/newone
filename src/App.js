import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';



const mockMovies = [
  {
    id: 1,
    title: 'Django Unchained',
  },
  
  {
    id: 2,
    title: 'Good Will Hunting',
  },

  {
    id:3,
    title: 'John Wick',
  }
];

function App() {
    const [movieRatings, setMovieRatings] = useState({});

    const rateMovie = (movieId, rating) => {
      setMovieRatings({
        ...movieRatings,
        [movieId]: rating,
      });
    };
  return (
    <div className="App">
      <h1>Movie Reviews</h1>
      <MovieList movies={mockMovies} movieRatings={movieRatings} onRateMovie={rateMovie} />
    </div>
  );
}

export default App;
