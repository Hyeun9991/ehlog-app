import React from 'react';
import Logo from '../Logo';
import { ContentItems } from './Header/MenuItems';

const Footer = () => {
  return (
    <section className="bg-secondaryColor">
      <footer className="container relative flex flex-col-reverse items-center justify-between py-5 mx-auto uppercase sm:flex-row gap-y-16">
        {/* Version */}
        <p className="text-xs text-textColor-light/70">last update 23.08.22</p>

        {/* Logo */}
        <div className="position-center">
          <Logo />
        </div>

        {/* Content Items */}
        <ul className="flex items-center text-xs text-textColor-light/70 gap-x-6 sm:gap-x-9">
          {ContentItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.to}
                target="_blank"
                className="transition-all hover:text-textColor-light"
                rel="noreferrer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </section>
  );
};

export default Footer;
