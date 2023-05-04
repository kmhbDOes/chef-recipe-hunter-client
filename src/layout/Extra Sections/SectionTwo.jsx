import React from "react";
import Lottie from "lottie-react";
import food from "../../assets/food.json";

const SectionTwo = () => {
  return (
    <>
      <div>
        <p className="text-center text-white font-semibold py-4 my-2 bg-red-500 w-56 mx-auto rounded-lg ">
          FoodJunction in numbers
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-5 md:gap-x-20">
          <div className="bg-white border-4 w-44 h-56 md:w-36 md:h-48  border-red-500 text-center rounded-lg border-solid">
            <img
              className="rounded-lg w-24 h-24 mx-auto my-4"
              src="https://t3.ftcdn.net/jpg/00/82/64/02/360_F_82640281_tNwiPB8uf172EaYQEuAkMWx6qkBnuCAd.jpg"
              alt=""
            />
            <span className="animate-pulse text-red-500 font-semibold duration-1000">
              2400
            </span>
            <br />
            <span>Members</span>
            <span></span>
          </div>
          <div className="bg-white border-4 w-44 h-56 md:w-36 md:h-48 border-red-500 text-center rounded-lg border-solid">
            <img
              className="rounded-lg w-24 h-24 mx-auto my-4"
              src="https://cdn-icons-png.flaticon.com/512/3565/3565418.png"
              alt=""
            />
            <span className="animate-pulse text-red-500 font-semibold">
              637
            </span>
            <br />
            <span>Recipes</span>
          </div>
          <div className="bg-white border-4 w-44 h-56 md:w-36 md:h-48 border-red-500 text-center rounded-lg border-solid">
            <img
              className="rounded-lg w-24 h-24 mx-auto my-4"
              src="https://static.vecteezy.com/system/resources/previews/004/511/733/original/camera-icon-on-white-background-vector.jpg"
              alt=""
            />
            <span className="animate-pulse text-red-500 font-semibold">
              1241
            </span>
            <br />
            <span>Photos</span>
          </div>
          <div className="w-44 ">
            <Lottie animationData={food} loop={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
