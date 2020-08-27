import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Moment from 'react-moment';

function MovieCard({ movie }) {
  return (
    <div className='MovieCard'>
      <a
        href={`https://www.youtube.com/watch?v=${movie.id.videoId}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          className='MovieCard__thumbnail'
          id='thumbnail'
          src={movie.snippet.thumbnails.high.url}
          alt={movie.snippet.title}
        />
      </a>
      <div className='MovieCard__info'>
        <Avatar
          className='MovieCard__avatar'
          src={movie.snippet.thumbnails.default.url}
          alt={movie.snippet.channelId}
        />
        <div className='MovieCard__text'>
          <a
            className='MovieCard__text__title'
            href={`https://www.youtube.com/watch?v=${movie.id.videoId}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {movie.snippet.title}
          </a>
          <p className='MovieCard__text__channel'>
            {movie.snippet.channelTitle}
          </p>
          <p className='MovieCard__text__views'>
            900K views : <Moment fromNow>{movie.snippet.publishTime}</Moment>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
