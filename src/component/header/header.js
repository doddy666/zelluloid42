import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import PdLogo from '../logo/PdLogo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Reference for detecting clicks outside the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header-container">
      <div className="logo-section">
        <img
          src={PdLogo}
          alt="Pleasure Dome Logo"
          className="header-logo"
        />
      </div>
      <nav ref={menuRef} className={`navbar ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/manifesto" onClick={() => setIsOpen(false)}>Manifesto</Link>
          </li>
          <li>
            <Link to="/tickets" onClick={() => setIsOpen(false)}>Tickets</Link>
          </li>
          <li>
            <Link to="/archives" onClick={() => setIsOpen(false)}>Archives</Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;

