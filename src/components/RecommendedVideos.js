import React from 'react';

const RecommendedVideos = ({ movies }) => {
  return (
    <div className='Recommended'>
      {movies.map((movie, idx) => (
        <div key={idx} className='movie'>
          <div className='movieImage'>
            <img src={movie.snippet.thumbnails.high.url} alt='movie image' />
          </div>
          <h3 className='movieTitle'>{movie.snippet.title}</h3>
          <p className='desc'>{movie.snippet.description}</p>
          <a
            className='link'
            href={`https://www.youtube.com/watch?v=${movie.id.videoId}`}
            target='_blank'
          >
            Link to Video
          </a>
        </div>
      ))}
    </div>
  );
};

export default RecommendedVideos;
