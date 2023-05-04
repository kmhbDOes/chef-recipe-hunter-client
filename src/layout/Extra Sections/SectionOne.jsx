import React from "react";

const SectionOne = () => {
  return (
    <>
      <div className="bg-red-500 text-white">
        <p className="text-3xl text-center py-2 font-semibold">
          Pick a Category
        </p>
        <div className="py-6 flex flex-col md:flex-row justify-center items-center gap-x-6 font-bold text-2xl ">
          <div>
            <img
              className="rounded-full w-56 h-56 mx-auto hover:opacity-70"
              src="https://www.liveeatlearn.com/wp-content/uploads/2018/04/greek-salad-sushi-13-650x450.jpg"
              alt=""
            />
            <p className="text-center">Appetizer</p>
          </div>
          <div>
            <img
              className="rounded-full w-56 h-56 mx-auto hover:opacity-70"
              src="https://hips.hearstapps.com/hmg-prod/images/delish-roast-beef-horizontal-1540505165.jpg?crop=1xw:0.84375xh;center,top"
              alt=""
            />
            <p className="text-center">Beef</p>
          </div>
          <div>
            <img
              className="rounded-full w-56 h-56 mx-auto hover:opacity-70 "
              src="https://static.onecms.io/wp-content/uploads/sites/43/2022/05/26/8805-CrispyFriedChicken-mfs-3x2-072.jpg"
              alt=""
            />
            <p className="text-center">Chicken</p>
          </div>
          <div>
            <img
              className="rounded-full w-56 h-56 mx-auto hover:opacity-70"
              src="https://cdn.vegetariantimes.com/wp-content/uploads/2005/05/zi3000-shutterstock-buddha-bowl.jpg"
              alt=""
            />
            <p className="text-center">Vegetarian</p>
          </div>
          <div>
            <img
              className="rounded-full w-56 h-56 mx-auto hover:opacity-70"
              src="https://images6.fanpop.com/image/photos/33200000/Desert-food-33299511-500-334.jpg"
              alt=""
            />
            <p className="text-center">Dessert</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
