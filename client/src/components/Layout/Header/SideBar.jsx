import React, { useState } from 'react';
import { IoCloseOutline, IoMenuOutline, IoArrowForward } from 'react-icons/io5';
import { MenuItems, ContentItems } from './MenuItems';

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* Side Button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className={`md:hidden z-50 flex items-center text-2xl cursor-pointer hover-icon transition-all ${
          showSidebar
            ? 'text-white/70 hover:text-white'
            : 'text-black/70 hover:text-black'
        }`}
      >
        {showSidebar ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>

      {/* Side Menu */}
      <div
        className={`top-0 right-0 px-6 sm:px-14 py-24 w-full fixed h-screen z-40 ease-in-out duration-200 flex flex-col gap-y-10 ${
          showSidebar
            ? 'translate-x-0 bg-[#161617]'
            : 'translate-x-full bg-black/70'
        } `}
      >
        <ul className="flex flex-col text-3xl text-[#f5f5f7] gap-y-3 uppercase">
          <p className="mb-1 font-light opacity-60">Menu</p>
          {MenuItems.map((item) => (
            <li className="flex" key={item.id}>
              <a
                href={item.to}
                className="flex items-center justify-between w-full transition-all peer opacity-95 hover:opacity-100 hover:text-white"
              >
                {item.name}
              </a>
              <span className="invisible text-lg text-white peer-hover:visible">
                <IoArrowForward />
              </span>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col text-lg text-[#f5f5f7] gap-y-3 uppercase">
          <p className="mb-1 font-light opacity-60">Social & Content</p>
          {ContentItems.map((item) => (
            <li key={item.id}>
              <a href={item.to} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
