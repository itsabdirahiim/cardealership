import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const CarCard = ({ car }) => {
  const [searchparams, setSearchParams] = useSearchParams();
  return (
    <div className=" car-card bg-gradient-to-r from-black via-blue-700 to-blue-900 text-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
      <div className="h-49 ">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2  hover:text-blue-300">
          <Link
            to={`/${car.id}`}
            state={{ chosen: `?${searchparams.toString()}` }}
          >
            {car.name}
          </Link>
        </h2>
        <p className="text-lg">Price: ${car.price}K</p>
      </div>
    </div>
  );
};

export default CarCard;
