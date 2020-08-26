import React from 'react';

const SidebarRow = ({ Icon, title, active }) => {
  return (
    <div className={`SidebarRow ${active && 'active'}`}>
      <span className='icon'>
        <Icon />
      </span>
      {title}
    </div>
  );
};

export default SidebarRow;
