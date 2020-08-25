import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import YoutubeLogo from '../img/yt_logo_rgb_light.png';

const Header = () => {
  return (
    <header className='MainHeader'>
      <div className='MainHeader__left'>
        <MenuIcon />
        <img
          className='MainHeader__logo'
          src={YoutubeLogo}
          alt='Youtube Logo'
        />
      </div>
      <div className='MainHeader__input'>
        <input type='text' placeholder='Search' />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className='MainHeader__icons'>
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar
          alt='Chris Davis'
          src='https://www.gravatar.com/avatar/90869ccfcf2c74c17013f5a74cdd7d7a'
        />
      </div>
    </header>
  );
};

export default Header;
