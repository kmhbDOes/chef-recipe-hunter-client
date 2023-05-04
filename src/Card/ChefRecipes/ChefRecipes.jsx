import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../layout/Spinner";
import { FaStar } from "react-icons/fa";

const ChefRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [chefs, setChefs] = useState({});
  const [loading, setLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [st, setSt] = useState(useParams);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-kmhbdoes.vercel.app/recipeData")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));

    fetch(
      `https://chef-recipe-hunter-server-kmhbdoes.vercel.app/chefData/${st.id}`
    )
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  const fav = (id) => {
    toast("Added To Favorites");
    setFavourites([...favourites, id]);
    // setClicked(true);
  };

  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <div className="flex flex-col  justify-center items-center gap-y-10 md:gap-x-28 py-4">
            {/* Chef Details */}
            <div className="border-4 border-white-400 hover:border-red-600 rounded-lg py-16">
              <div className="card  card-side bg-base-100 text-center md:text-left py-2">
                <figure>
                  <img
                    className="w-56 h-56 rounded-full  mx-auto "
                    src={chefs.chefImage}
                    alt="image"
                  />
                </figure>
                <div className="card-body mx-4 text-2xl">
                  <h2 className="card-title font-bold my-4">
                    {chefs.chefName}
                  </h2>
                  <p className="my-4"> {chefs.shortDescription}</p>
                  <p className="my-4">
                    <span className="font-bold">Recipes: </span>
                    {chefs.numberOfRecipes}
                  </p>
                  <p className="my-4">
                    <span className="font-bold">Likes: </span> {chefs.likes}
                  </p>
                  <h2 className="my-4">
                    <span className="font-bold">Experience : </span>
                    {chefs.yearsOfExperience} Years
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 my-2 gap-x-8">
              {/* Recipe Cards */}
              {recipes.map((recipe) => (
                <p key={recipe.id}>
                  <div>
                    <div className="card  bg-base-100 shadow-xl rounded-lg mx-auto text-center md:text-left border-4 border-red-400 hover:border-red-600 my-2">
                      <figure>
                        <img
                          className="rounded-full w-56 h-56 mx-auto my-2"
                          src={recipe.image}
                          alt="image"
                        />
                      </figure>
                      <div className="card-body text-center md:text-left mx-4 py-2 md:h-96">
                        <p className="card-title font-semibold">
                          <span className="font-bold text-2xl">
                            {recipe.name}
                          </span>
                        </p>
                        <p>
                          <span className="font-bold">Ingredients: </span>
                          {recipe.ingredients}
                        </p>
                        <p>
                          <span className="font-bold">Cooking: </span>
                          {recipe.cooking_method.slice(0, 5)}
                        </p>
                        <p className="flex justify-center md:justify-start my-2 ">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </p>
                        {
                          <button
                            onClick={() => fav(recipe.id)}
                            className="btn-rec my-4"
                            disabled={favourites.includes(recipe.id)}
                          >
                            Favorite
                          </button>
                        }
                      </div>
                    </div>
                  </div>
                </p>
              ))}
              <ToastContainer></ToastContainer>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChefRecipes;
