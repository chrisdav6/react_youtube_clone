import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className='movie'>
      <div className='movieImage'>
        <img
          src={movie.snippet.thumbnails.high.url}
          alt={movie.snippet.title}
        />
      </div>
      <h3 className='movieTitle'>{movie.snippet.title}</h3>
      <p className='desc'>{movie.snippet.description}</p>
      <a
        className='link'
        href={`https://www.youtube.com/watch?v=${movie.id.videoId}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        Link to Video
      </a>
    </div>
  );
}

export default MovieCard;
