import React from 'react';

const Search = ({ movies }) => {
  return (
    <div className='Search'>
      {movies.map((movie, idx) => (
        <p>{movie.snippet.title}</p>
      ))}
    </div>
  );
};

export default Search;
