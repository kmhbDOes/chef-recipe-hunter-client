import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [chefs, setChefs] = useState({});
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

  return (
    <div>
      <div className="">
        <div className="card w-96 h-96 card-side bg-base-100 shadow-xl text-center rounded-lg md:text-left border-4 border-red-400 hover:border-red-600 py-2">
          <figure>
            <img
              className="rounded-full w-56 h-56 mx-auto "
              src={chefs.chefImage}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{chefs.chefName}</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grd-cols-1 md:grid-cols-3 gap-y-6 my-2">
        {recipes.map((recipe) => (
          <p key={recipe.id}>
            <div>
              <div className="card w-96 h-96 bg-base-100 shadow-xl rounded-lg mx-auto text-center md:text-left border-4 border-red-400 hover:border-red-600 py-2">
                <figure>
                  <img
                    className="rounded-full w-56 h-56 mx-auto"
                    src={recipe.image}
                    alt="image"
                  />
                </figure>
                <div className="card-body mx-4 py-2 ">
                  <h2 className="card-title font-semibold">{recipe.name}</h2>
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
  );
};

export default ChefRecipes;
