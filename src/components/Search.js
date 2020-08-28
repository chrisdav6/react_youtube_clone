import React from 'react';
import SearchCard from './SearchCard';

const Search = ({ movies }) => {
  return (
    <div className='Search'>
      {movies.map((movie, idx) => (
        <SearchCard key={idx} movie={movie} />
      ))}
    </div>
  );
};

export default Search;
