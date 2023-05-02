import React, { useEffect, useState } from "react";

const ChefDetail = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefData")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div className="grid grd-cols-1 md:grid-cols-3 gap-y-6 my-2">
        {chefs.map((chefsCard) => (
          <p key={chefsCard.id}>
            <div>
              <div className="card w-96 h-96 bg-base-100 shadow-xl rounded-lg mx-auto text-center md:text-left border-4 border-red-400 hover:border-red-600">
                <figure>
                  <img
                    className="rounded-full w-56 h-56 mx-auto"
                    src={chefsCard.chefImage}
                    alt="image"
                  />
                </figure>
                <div className="card-body mx-4 py-2">
                  <h2 className="card-title font-semibold">
                    {chefsCard.chefName}
                  </h2>
                  <p>{chefsCard.shortDescription}</p>
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

export default ChefDetail;