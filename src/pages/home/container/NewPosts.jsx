import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

const NewPosts = () => {
  return (
    <section>
      <h1 className="mb-6 title-3xl">
        New Posts
        <span className="dot-text"> .</span>
      </h1>

      {/* Post Items */}
      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
        <a href="/" className="group">
          <div className="transition-all bg-[#f5f5f7] rounded-lg group-hover:bg-black">
            <div className="h-[150px] bg-gray-300/40 rounded-lg rounded-b-none"></div>
            <div className="p-4">
              <h2 className="transition-all mb-2 title-2xl group-hover:text-[#eeeeee]">
                title 1
              </h2>
              {/* <p className="transition-all mb-2 overflow-hidden text-sm text-[#1d1d1f] whitespace-normal line-clamp-2 group-hover:text-[#eeeeee]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt nemo incidunt, soluta, iure impedit omnis dolores quam
                harum fugiat possimus veniam corrupti quisquam consectetur iusto
                distinctio autem aliquid commodi vitae.
              </p> */}
              <p className="transition-all text-xs text-[#6e6e73] group-hover:text-[#eeeeee]">
                2023.08.22.화요일
              </p>
            </div>
          </div>
        </a>
        <a href="/" className="group">
          <div className="transition-all bg-[#f5f5f7] rounded-lg group-hover:bg-black">
            <div className="h-[150px] bg-gray-300/40 rounded-lg rounded-b-none"></div>
            <div className="p-4">
              <h2 className="transition-all mb-2 text-xl md:text-2xl font-semibold text-[#1d1d1f] group-hover:text-[#eeeeee]">
                title 1
              </h2>
              {/* <p className="transition-all mb-2 overflow-hidden text-sm text-[#1d1d1f] whitespace-normal line-clamp-2 group-hover:text-[#eeeeee]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt nemo incidunt, soluta, iure impedit omnis dolores quam
                harum fugiat possimus veniam corrupti quisquam consectetur iusto
                distinctio autem aliquid commodi vitae.
              </p> */}
              <p className="transition-all text-xs text-[#6e6e73] group-hover:text-[#eeeeee]">
                2023.08.22.화요일
              </p>
            </div>
          </div>
        </a>
        <a href="/" className="group">
          <div className="transition-all bg-[#f5f5f7] rounded-lg group-hover:bg-black">
            <div className="h-[150px] bg-gray-300/40 rounded-lg rounded-b-none"></div>
            <div className="p-4">
              <h2 className="transition-all mb-2 text-xl md:text-2xl font-semibold text-[#1d1d1f] group-hover:text-[#eeeeee]">
                title 1
              </h2>
              {/* <p className="transition-all mb-2 overflow-hidden text-sm text-[#1d1d1f] whitespace-normal line-clamp-2 group-hover:text-[#eeeeee]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt nemo incidunt, soluta, iure impedit omnis dolores quam
                harum fugiat possimus veniam corrupti quisquam consectetur iusto
                distinctio autem aliquid commodi vitae.
              </p> */}
              <p className="transition-all text-xs text-[#6e6e73] group-hover:text-[#eeeeee]">
                2023.08.22.화요일
              </p>
            </div>
          </div>
        </a>
        <a href="/" className="group">
          <div className="transition-all bg-[#f5f5f7] rounded-lg group-hover:bg-black">
            <div className="h-[150px] bg-gray-300/40 rounded-lg rounded-b-none"></div>
            <div className="p-4">
              <h2 className="transition-all mb-2 text-xl md:text-2xl font-semibold text-[#1d1d1f] group-hover:text-[#eeeeee]">
                title 1
              </h2>
              {/* <p className="transition-all mb-2 overflow-hidden text-sm text-[#1d1d1f] whitespace-normal line-clamp-2 group-hover:text-[#eeeeee]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt nemo incidunt, soluta, iure impedit omnis dolores quam
                harum fugiat possimus veniam corrupti quisquam consectetur iusto
                distinctio autem aliquid commodi vitae.
              </p> */}
              <p className="transition-all text-xs text-[#6e6e73] group-hover:text-[#eeeeee]">
                2023.08.22.화요일
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* More Button */}
      <div className="flex justify-center w-full">
        <button className="link-button">
          더 보러가기
          <span className="text-xs">
            <IoArrowForward />
          </span>
        </button>
      </div>
    </section>
  );
};

export default NewPosts;
