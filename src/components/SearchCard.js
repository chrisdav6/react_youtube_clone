import React from 'react';

const SearchCard = ({ movie }) => {
  return (
    <div className='SearchCard'>
      <p>{movie.snippet.title}</p>
    </div>
  );
};

export default SearchCard;
