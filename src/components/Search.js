import React from 'react';
import SearchCard from './SearchCard';
import TuneIcon from '@material-ui/icons/Tune';

const Search = ({ movies }) => {
  return (
    <div className='Search'>
      <div className='Search__filter'>
        <TuneIcon className='Search__icon' />{' '}
        <span className='Search__filter__text'>FILTER</span>
      </div>

      <div className='Search__contents'>
        {movies.map((movie, idx) => (
          <SearchCard key={idx} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
