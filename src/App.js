import React from 'react';
import "./index.css"
import HorizontalScrollbar from "./comps/HorizontalScrollbar";
import CarCard from './comps/carcard';
import cars from './data/data';
import front from "./images/actfront.jpg"
import { useSearchParams, searchparams } from "react-router-dom";

function Home() {
  const [searchparams, setSearchParams] = useSearchParams();
  const chosen = searchparams.get("type");
  console.log(chosen)
  const cars1 = chosen ? cars.filter(x => x.type === chosen) : cars;
  return (
    <div className="h-screen bg-gradient-to-r from-black to-gray-800">
      <div className="h-3/5 flex flex-col items-center justify-start pt-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gold-dark">Car Explorer</h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gold-dark">Explore Cars and View Their 3D Models</p>
        </div>
        <div className='flex justify-center'>
          <img
            src={front} // Replace with the path to the car image
            alt="Car Image"
            className="w-2/3 h-full sm:max-h-full border-none rounded-full object-cover "
          />
        </div>
      </div>

      {/* Bottom half of the page */}
      <div className="h-2/5 p-8 overflow-y-auto">
        <HorizontalScrollbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9 w-full">
          {cars1.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;