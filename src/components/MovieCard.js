import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Moment from 'react-moment';

function MovieCard({ movie }) {
  return (
    <div className='MovieCard'>
      <img src={movie.snippet.thumbnails.high.url} alt={movie.snippet.title} />
      <div className='MovieCard__info'>
        <Avatar
          className='MovieCard__avatar'
          src={movie.snippet.thumbnails.default.url}
          alt={movie.snippet.channelId}
        />
        <div className='MovieCard__text'>
          <h4>{movie.snippet.title}</h4>
          <p>{movie.snippet.channelTitle}</p>
          <p>
            900K views : <Moment fromNow>{movie.snippet.publishTime}</Moment>
          </p>
        </div>
        <a
          className='link'
          href={`https://www.youtube.com/watch?v=${movie.id.videoId}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Link to Video
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
