import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => (
  <div className="ma4 mt0">
    <Tilt
      className="Tilt br2 shadow-2"
      options={{ max: 65, easing: 'cubic-bezier(.03,.98,.52,.99)', speed: 10 }}
      style={{ height: 150, width: 150, transformStyle: 'preserve-3d' }}
    >
      <div className="Tilt-inner pa3">
        <img
          style={{ paddingTop: '5px', transform: 'translateZ(20px)' }}
          alt="logo"
          src={brain}
        />
      </div>
    </Tilt>
  </div>
);

export default Logo;
