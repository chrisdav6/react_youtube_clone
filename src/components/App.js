import React, { useEffect, useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import RecommendedVideos from './RecommendedVideos';
import axios from 'axios';
const REACT_APP_APIKEY = process.env.REACT_APP_APIKEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('react js');

  useEffect(() => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=rating&q=s${search}&key=${REACT_APP_APIKEY}`;

    const getMovies = async () => {
      const response = await axios.get(url);
      setMovies(response.data.items);
    };

    getMovies();
  }, [search]);

  const handleInput = e => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSearch = e => {
    setSearch(encodeURI(input));
  };

  return (
    <div className='App'>
      <Header
        input={input}
        handleSearch={handleSearch}
        handleInput={handleInput}
      />
      <div className='contents'>
        <SideBar />
        <RecommendedVideos movies={movies} />
      </div>
    </div>
  );
};

export default App;
