import React from 'react';
import Logo from '../Logo';
import { ContentItems } from './Header/MenuItems';

const Footer = () => {
  return (
    <div className="bg-[#f5f5f7]">
      <div className="container relative flex items-center justify-between py-6 mx-auto">
        {/* Version */}
        <div>
          <p className="text-xs text-[#6e6e73]">last update 23.08.22</p>
        </div>

        {/* Logo */}
        <div className="position-center">
          <Logo />
        </div>

        {/* Content Items */}
        <ul className="flex items-center text-xs text-[#6e6e73] gap-x-9">
          {ContentItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.to}
                target="_blank"
                className="transition-all hover:text-black"
                rel="noreferrer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
