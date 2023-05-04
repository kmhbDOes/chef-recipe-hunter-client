import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefDetail = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-kmhbdoes.vercel.app/chefData")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <p className="text-center py-4 w-52 bg-red-500 rounded-lg text-white font-semibold mx-auto">
        Pick among the best cooks
      </p>
      <div className="grid grd-cols-1 md:grid-cols-3 gap-y-6 my-2">
        {chefs.map((chefsCard) => (
          <p key={chefsCard.id}>
            <div>
              <div className="card w-96 h-96 bg-base-100 shadow-xl rounded-lg mx-auto text-center md:text-left border-4 border-red-400 hover:border-red-600 py-2">
                <figure>
                  <LazyLoad>
                    <img
                      className="rounded-full w-56 h-56 mx-auto"
                      src={chefsCard.chefImage}
                      alt="image"
                    />
                  </LazyLoad>
                </figure>
                <div className="card-body mx-4 py-2 ">
                  <h2 className="card-title font-bold">{chefsCard.chefName}</h2>
                  <h2>
                    <span className="font-semibold">Experience : </span>
                    {chefsCard.yearsOfExperience} Years
                  </h2>
                  <p>
                    <span className="font-semibold">Recipes : </span>
                    {chefsCard.numberOfRecipes}
                  </p>
                  <p>
                    <span className="font-semibold">Likes : </span>
                    {chefsCard.likes}
                  </p>
                  <Link to={`/chefrecipe/${chefsCard.id}`}>
                    <button className="btn-rec my-2">View Recipes</button>
                  </Link>
                  <div className="card-actions justify-end">
                    {/* <Link to={`/chefsCard/${chefsCard.id}`}>
                      <button className="btn btn-primary">Book Now</button>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </p>
        ))}
      </div>
    </div>
  );
};

export default ChefDetail;
