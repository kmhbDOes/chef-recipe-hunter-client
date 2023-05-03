import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ChefRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/recipeData")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));

    fetch("http://localhost:5000/chefData")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div className="grid grd-cols-1 md:grid-cols-3 gap-y-6 my-2">
        {recipes.map((recipe) => (
          <p key={recipe.id}>
            <div>
              <div className="card w-96 h-96 bg-base-100 shadow-xl rounded-lg mx-auto text-center md:text-left border-4 border-red-400 hover:border-red-600 py-2">
                <figure>
                  <img
                    className="rounded-full w-56 h-56 mx-auto"
                    src=""
                    alt="image"
                  />
                </figure>
                <div className="card-body mx-4 py-2 ">
                  <h2 className="card-title font-semibold">{recipe.name}</h2>
                  {/* <h2>Experience: {chefsCard.yearsOfExperience} Years</h2> */}
                  {/* <p>Recipes: {chefsCard.numberOfRecipes}</p> */}
                  {/* <p>Likes :{chefsCard.likes}</p> */}
                  <Link to="/chefrecipe">
                    <button className="btn-rec my-2">View Recipes</button>
                  </Link>
                  <div className="card-actions justify-end">
                    {/* <Link to={`/destination/${destination.id}`}>
                    <button className="btn btn-primary">Book Now</button>
                  </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </p>
        ))}
      </div>
    </>
  );
};

export default ChefRecipes;
