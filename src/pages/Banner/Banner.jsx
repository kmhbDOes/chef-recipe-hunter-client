import React from "react";

const Banner = () => {
  return (
    <div className="py-4">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-x-4 py-6 banner rounded-lg">
        <div className="text-left bg-sky-500 rounded-lg p-3">
          <p>
            <span className="text-white font-bold text-3xl  ">
              We all need <span className=" animate-ping">food</span> to live
              on! <br />
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
            className="w-80 h-96 rounded-lg"
            src="https://www.simplyrecipes.com/thmb/jrYzfC0QitH7jZa-uGAcSm1NHjg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__10__Royal-Icing-Cookies-LEAD-25-622b9f795b944d9d965ae88e824d6e4a.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
