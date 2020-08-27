import React from 'react';
import MovieCard from './MovieCard';

const RecommendedVideos = ({ movies }) => {
  return (
    <div className='Recommended'>
      {movies.map((movie, idx) => (
        <MovieCard key={idx} movie={movie} />
      ))}
    </div>
  );
};

export default RecommendedVideos;
