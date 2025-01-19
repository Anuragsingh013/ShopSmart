import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <input type="text" placeholder="Search here..." />
      <div className="profile">
        <span>Devon Lane</span>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Header;
