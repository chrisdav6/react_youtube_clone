import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import RecommendedVideos from './RecommendedVideos';
import Search from './Search';
import Loader from './Loader';
import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('react js');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=rating&q=s${search}&key=${process.env.REACT_APP_APIKEY}`;

    const getMovies = async () => {
      const response = await axios.get(url);
      setMovies(response.data.items);
      setIsLoading(false);
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
      <Switch>
        <Route exact path='/'>
          <div className='contents'>
            <SideBar />
            {isLoading ? <Loader /> : <RecommendedVideos movies={movies} />}
          </div>
        </Route>
        <Route path='/search'>
          <div className='contents'>
            <SideBar />
            {isLoading ? <Loader /> : <Search movies={movies} />}
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
