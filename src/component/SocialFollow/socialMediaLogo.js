import React from 'react';
import { FaInstagram, FaLink } from 'react-icons/fa';

function SocialMediaButtons() {
  return (
    <div>
      <a href="https://linktr.ee/zelluloid42" target="_blank" rel="noopener noreferrer" className="social-button">
        <FaLink /> Linktree
      </a>
      <a href="https://www.instagram.com/zelluloid42" target="_blank" rel="noopener noreferrer" className="social-button">
        <FaInstagram /> Instagram
      </a>
    </div>
  );
}

export default SocialMediaButtons;
