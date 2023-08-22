import React from 'react';
import { images } from '../../../constants';
import SideBar from './SideBar';
import Logo from '../../Logo';
import { MenuItems } from './MenuItems';

const Header = () => {
  return (
    <section className="fixed top-0 left-0 w-full transition-all bg-white/70 backdrop-blur-sm hover:bg-white">
      <header className="container flex items-center justify-between px-5 py-2.5 mx-auto">
        {/* Logo */}
        <Logo />

        {/* Menu Items */}
        <div className="items-center hidden md:flex gap-x-9">
          <ul className="flex items-center text-xs gap-x-9 text-[#151515]">
            {MenuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.to}
                  className="transition-all opacity-80 hover:opacity-100"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="hidden text-xs py-2.5 px-9 md:flex items-center gap-1 rounded text-bold bg-black text-white transition-all hover:bg-[#333]">
            <img src={images.LightSmallLogo} alt="logo" className="w-[10px]" />
            Sign in
          </button>
        </div>

        {/* Side Bar */}
        <SideBar />
      </header>
    </section>
  );
};

export default Header;
