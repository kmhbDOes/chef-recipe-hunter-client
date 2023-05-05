import React from "react";
import { FaHamburger } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="py-4 rounded-lg">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-y-4 md:gap-x-4 py-6 banner rounded-lg">
        <div className="text-center md:text-left text-xl rounded-lg p-3 bg-red-500 opacity-80 w-96 ">
          <p>
            <span className="text-white font-bold text-3xl">
              We all need
              <span className="flex justify-center md:justify-start gap-x-1  mx-auto">
                food
                <span className="animate-pulse">
                  <FaHamburger />
                </span>
              </span>
              to live on! <br />
            </span>
            <span className="text-white font-semibold  rounded-lg">
              But different foods are also fascinating <br /> to learn about.
              Some foods are actually mislabeled and <br /> grouped incorrectly.
              Other foods have morphed throughout the years. And even other{" "}
              <br /> foods are just plain gross! These fun food facts are
              perfect <br /> for sharing with your students. Post one during
              your morning meeting <br /> or share them all during a science
              lesson.
            </span>
          </p>
        </div>
        <div>
          <img
            className="w-64 h-64  md:w-96 md:h-96 rounded-lg"
            src="https://cdn.pixabay.com/photo/2015/09/22/15/37/chinese-food-951889_960_720.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
