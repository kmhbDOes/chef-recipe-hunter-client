import React from "react";
import Lottie from "lottie-react";
import food from "../../assets/food.json";

const SectionTwo = () => {
  return (
    <>
      <div>
        <p className="text-center py-4">FoodJunction in numbers</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-5 md:gap-x-20">
          <div className="bg-white border-4 w-44 h-56 md:w-36 md:h-48  border-red-500 text-center rounded-lg border-solid">
            <img
              className="w-24 h-24 mx-auto my-4"
              src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-hat-cook-icon-template-vector-png-image_6003620.jpg"
              alt=""
            />
            <span>2400</span> <br />
            <span>Members</span>
            <span></span>
          </div>
          <div className="bg-white border-4 w-44 h-56 md:w-36 md:h-48 border-red-500 text-center rounded-lg border-solid">
            <img
              className="w-24 h-24 mx-auto my-4"
              src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-hat-cook-icon-template-vector-png-image_6003620.jpg"
              alt=""
            />
            <span>637</span> <br />
            <span>Recipes</span>
          </div>
          <div className="bg-white border-4 w-44 h-56 md:w-36 md:h-48 border-red-500 text-center rounded-lg border-solid">
            <img
              className="w-24 h-24 mx-auto my-4"
              src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-hat-cook-icon-template-vector-png-image_6003620.jpg"
              alt=""
            />
            <span>1241</span> <br />
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
