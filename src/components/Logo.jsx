import React from 'react';
import { images } from '../constants';

const Logo = () => {
  return (
    <div>
      <a href="/">
        <img
          src={images.DarkSmallLogo}
          alt="logo"
          className="transition-all hover:scale-110"
        />
      </a>
    </div>
  );
};

export default Logo;
