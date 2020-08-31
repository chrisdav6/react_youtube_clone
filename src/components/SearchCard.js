import React from 'react';
import Moment from 'react-moment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const SearchCard = ({ movie }) => {
  return (
    <div className='SearchCard'>
      <a
        href={`https://www.youtube.com/watch?v=${movie.id.videoId}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='SearchCard__image'>
          <img
            src={movie.snippet.thumbnails.high.url}
            alt={movie.snippet.title}
          />
        </div>
      </a>
      <div className='SearchCard__contents'>
        <a
          className='SearchCard__title'
          href={`https://www.youtube.com/watch?v=${movie.id.videoId}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          {movie.snippet.title}
        </a>
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
