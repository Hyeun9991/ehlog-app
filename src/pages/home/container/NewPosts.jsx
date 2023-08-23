import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

const NewPosts = () => {
  return (
    <section className="pt-20 border-b border-borderColor">
      <div className="main-container">
        <div className="flex flex-col items-start gap-10 mb-6 lg:gap-20 lg:flex-row ">
          <div className="">
            <span className="leading-3 uppercase text-7xl md:text-8xl font-oranienbaum font-extralight">
              New
            </span>
            <h1 className="uppercase text-8xl md:text-9xl font-oranienbaum">
              Posts
            </h1>
          </div>

          {/* Main Item */}
          <a
            href="/"
            className="relative flex flex-col border border-borderColor group"
          >
            {/* image */}
            <div className="bg-gray-200 h-[250px]"></div>

            {/* Info */}
            <div className="flex flex-col gap-2 p-4">
              <p className="text-xs text-textColor-light/70">
                2023.08.23.수요일
              </p>
              <h2 className="text-xl font-light uppercase sm:text-2xl text-textColor-light">
                Main Post, 메인 포스트
              </h2>
              <p className="overflow-hidden text-sm leading-6 whitespace-normal text-textColor-light line-clamp-3 sm:line-clamp-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                possimus praesentium nostrum, quod inventore eos deleniti iusto
                magnam sunt harum necessitatibus voluptatibus cum asperiores
                iste dolorum, eum ad nihil accusantium non esse sed facilis
                laudantium. Aperiam vel debitis et beatae! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Dolor possimus praesentium
                nostrum, quod inventore eos deleniti iusto magnam sunt harum
                necessitatibus voluptatibus cum asperiores iste dolorum, eum ad
                nihil accusantium non esse sed facilis laudantium. Aperiam vel
                debitis et beatae! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolor possimus praesentium nostrum, quod
                inventore eos deleniti iusto magnam sunt harum necessitatibus
                voluptatibus cum asperiores iste dolorum, eum ad nihil
                accusantium non esse sed facilis laudantium. Aperiam vel debitis
                et beatae!
              </p>
            </div>
            <p
              href="/"
              className="absolute flex items-center justify-end gap-1 text-xs uppercase right-0 top-[-1.5rem] group-hover:right-[-6px] transition-all group-hover:text-primaryColor"
            >
              more
              <IoArrowForward />
            </p>
          </a>
        </div>

        {/* Post Items */}
        <div className="hidden grid-cols-1 gap-6 mb-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {/* Item */}
          <a href="/" className="flex flex-col border border-borderColor group">
            {/* image */}
            <div className="bg-gray-200 h-[180px]"></div>
            <div className="flex flex-col gap-1 p-3">
              <p className="text-xs text-textColor-light/70">
                2023.08.23.수요일
              </p>
              <h2 className="text-lg font-light uppercase text-textColor-light">
                title 1, 타이틀 1
              </h2>
              <p className="overflow-hidden text-sm whitespace-normal text-textColor-light line-clamp-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                possimus praesentium nostrum, quod inventore eos deleniti iusto
                magnam sunt harum necessitatibus voluptatibus cum asperiores
                iste dolorum, eum ad nihil accusantium non esse sed facilis
                laudantium. Aperiam vel debitis et beatae!
              </p>
              <p className="flex items-center justify-end gap-1 text-xs uppercase transition-all group-hover:px-1 group-hover:text-primaryColor">
                more
                <IoArrowForward />
              </p>
            </div>
          </a>
          {/* Item */}
          <a href="/" className="flex flex-col border border-borderColor group">
            {/* image */}
            <div className="bg-gray-200 h-[180px]"></div>
            <div className="flex flex-col gap-1 p-3">
              <p className="text-xs text-textColor-light/70">
                2023.08.23.수요일
              </p>
              <h2 className="text-lg font-light uppercase text-textColor-light">
                title 1, 타이틀 1
              </h2>
              <p className="overflow-hidden text-sm whitespace-normal text-textColor-light line-clamp-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                possimus praesentium nostrum, quod inventore eos deleniti iusto
                magnam sunt harum necessitatibus voluptatibus cum asperiores
                iste dolorum, eum ad nihil accusantium non esse sed facilis
                laudantium. Aperiam vel debitis et beatae!
              </p>
              <p className="flex items-center justify-end gap-1 text-xs uppercase transition-all group-hover:px-1 group-hover:text-primaryColor">
                more
                <IoArrowForward />
              </p>
            </div>
          </a>
          {/* Item */}
          <a href="/" className="flex flex-col border border-borderColor group">
            {/* image */}
            <div className="bg-gray-200 h-[180px]"></div>
            <div className="flex flex-col gap-1 p-3">
              <p className="text-xs text-textColor-light/70">
                2023.08.23.수요일
              </p>
              <h2 className="text-lg font-light uppercase text-textColor-light">
                title 1, 타이틀 1
              </h2>
              <p className="overflow-hidden text-sm whitespace-normal text-textColor-light line-clamp-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                possimus praesentium nostrum, quod inventore eos deleniti iusto
                magnam sunt harum necessitatibus voluptatibus cum asperiores
                iste dolorum, eum ad nihil accusantium non esse sed facilis
                laudantium. Aperiam vel debitis et beatae!
              </p>
              <p className="flex items-center justify-end gap-1 text-xs uppercase transition-all group-hover:px-1 group-hover:text-primaryColor">
                more
                <IoArrowForward />
              </p>
            </div>
          </a>
        </div>

        {/* More Button */}
        <a href="/" className="flex justify-center">
          <button className="mt-2 secondary-button">Show More</button>
        </a>
      </div>
    </section>
  );
};

export default NewPosts;
