import React from 'react';
import './header.css';
import PdLogo from '../logo/PdLogo.jpg';

const Header = () => {
  return (
    <header className="header-container">
      <img
        src={PdLogo}
        alt="Pleasure Dome Logo"
        className="header-logo"
      />
    </header>
  );
};

export default Header;
