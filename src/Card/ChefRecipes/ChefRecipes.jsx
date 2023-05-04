import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../layout/Spinner";

const ChefRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [chefs, setChefs] = useState({});
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [st, setSt] = useState(useParams);

  const fav = () => {
    toast("Added To Favorites");
    setClicked(true);
  };

  useEffect(() => {
    console.log(st.id);
    fetch("http://localhost:5000/recipeData")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));

    fetch(`http://localhost:5000/chefData/${st.id}`)
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
    console.log(chefs);
  }, []);

  // function recipeItems() {
  //   return recipes.map((c) => <li>{c.name}</li>);
  // }
  // function chefDetails() {
  //   return recipes.map((c) => <li>{c.name}</li>);
  // }

  useEffect(() => {
    // Simulating a delay of 2 seconds to simulate data loading
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-center items-center gap-y-10 md:gap-x-28 py-4">
            {/* Chef Details */}
            <div className="border-4 border-white-400 hover:border-red-600 rounded-lg py-16">
              <div className="card w-96 h-full card-side bg-base-100 text-center md:text-left py-2">
                <figure>
                  <img
                    className="w-56 h-56 rounded-full  mx-auto "
                    src={chefs.chefImage}
                    alt="Movie"
                  />
                </figure>
                <div className="card-body mx-4 text-2xl">
                  <h2 className="card-title font-bold my-4">
                    {chefs.chefName}
                  </h2>
                  <p className="my-4"> {chefs.shortDescription}</p>
                  <p className="my-4">Recipes: {chefs.numberOfRecipes}</p>
                  <p className="my-4">Likes :{chefs.likes}</p>
                  <h2 className="my-4">
                    Experience: {chefs.yearsOfExperience} Years
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid grd-cols-1 md:grid-cols-2 gap-y-6 my-2 gap-x-8">
              {/* Recipe Cards */}
              {recipes.map((recipe) => (
                <p key={recipe.id}>
                  <div>
                    <div className="card w-96 h-96  bg-base-100 shadow-xl rounded-lg mx-auto text-center md:text-left border-4 border-red-400 hover:border-red-600 py-2">
                      <figure>
                        <img
                          className="rounded-full w-56 h-56 mx-auto"
                          src={recipe.image}
                          alt="image"
                        />
                      </figure>
                      <div className="card-body mx-4 py-2 ">
                        <h2 className="card-title font-semibold">
                          {recipe.name}
                        </h2>
                        <h2>Recipe Rating</h2>
                        {/* <h2>Experience: {chefsCard.yearsOfExperience} Years</h2> */}
                        {/* <p>Recipes: {chefsCard.numberOfRecipes}</p> */}
                        {/* <p>Likes :{chefsCard.likes}</p> */}

                        {
                          <button
                            onClick={fav}
                            className="btn-rec my-2"
                            disabled={clicked}
                          >
                            Favorite
                          </button>
                        }
                        <ToastContainer></ToastContainer>
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
          </div>
        </>
      )}
    </>
  );
};

export default ChefRecipes;
