import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import RecommendedVideos from './RecommendedVideos';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='contents'>
        <SideBar />
        <RecommendedVideos />
      </div>
    </div>
  );
};

export default App;
