import React from 'react';
import Moment from 'react-moment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const SearchCard = ({ movie }) => {
  return (
    <div className='SearchCard'>
      <div className='SearchCard__image'>
        <img
          src={movie.snippet.thumbnails.high.url}
          alt={movie.snippet.title}
        />
      </div>
      <div className='SearchCard__contents'>
        <h4 className='SearchCard__title'>{movie.snippet.title}</h4>
        <div className='SearchCard__stats'>
          <p>{movie.snippet.channelTitle}</p>
          <CheckCircleIcon className='SearchCard__stats__icon' />
          <p>
            1.2M views • <Moment fromNow>{movie.snippet.publishTime}</Moment>
          </p>
        </div>
        <p className='SearchCard__description'>{movie.snippet.description}</p>
      </div>
    </div>
  );
};

export default SearchCard;
