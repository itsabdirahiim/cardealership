import React, { useRef, useState, useEffect } from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link, useSearchParams ,useLocation, NavLink} from "react-router-dom";
import { SiLamborghini } from 'react-icons/si'
import {SiBmw} from 'react-icons/si'

import CarCard from "./carcard";
import cars from '../data/data';

// const button= [
//   <button key="2" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none focus:ring">
//     2
//   </button>,
//   <button key="3" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none focus:ring">
//     3
//   </button>,
//   <button key="4" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none focus:ring">
//     4
//   </button>,
// ];


const HorizontalScrollbar = () => {

 
  const location = useLocation()
  const search = location.state?.chosen || 0
  // console.log(search)
  const contentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchparams, setSearchParams] = useSearchParams();
  const chosen = searchparams.get("type");


  useEffect(() => {
    // When the component mounts, check if there's a selected index in localStorage
    const storedIndex = localStorage.getItem("selected_index");
    if (storedIndex !== null) {
      setActiveIndex(parseInt(storedIndex));
    }
  }, []);

  const handleFilterClick = (index) => {
    setActiveIndex(index);
    // Save the selected index to localStorage
    localStorage.setItem("selected_index", index);
  };

  

  
  
//   const buttonLinks = {
//     "0": <Link to="carschosen/0"
//     state={{chosen :`?${searchparams.toString()}`}}>0</Link>,
//     "1": <Link to="carschosen/1"
//   state={{chosen : `?${searchparams.toString()}`}}>1</Link>,
//     "2": <Link to="carschosen/2"
//     state={{chosen :  `?${searchparams.toString()}`}}>2</Link>,
//     "3": <Link to="carschosen/3"
//     state={{chosen :`?${searchparams.toString()}`}}>3</Link>,
//   };
//  const show = chosen ? buttonLinks[chosen]: button


  const scrollToLeft = () => {
    contentRef.current.scrollBy({ left: -200, behavior: "smooth" });
    
    setActiveIndex((prevIndex) => (prevIndex  > 0 ?  handleFilterClick(prevIndex - 1) :  handleFilterClick(0)),
   );
   if( activeIndex === 2){
    window.location.href = "?type=bmw"
   }else if(activeIndex === 1){
    window.location.href = "/"
   }
    
  };

  const scrollToRight = () => {
    contentRef.current.scrollBy({ left: 200, behavior: "smooth" });
    setActiveIndex((prevIndex) =>
      prevIndex < contentRef.current.children.length - 1
        ?  handleFilterClick(prevIndex + 1)
        : handleFilterClick(contentRef.current.children.length - 1)
    );

   if ( activeIndex === 0){
    window.location.href = "?type=bmw"
   }else if (activeIndex === 1 ){
    window.location.href = "?type=lamb"
   }
    
  };
  if (!cars || cars.length === 0) {
    return <div>No cars found.</div>;
  }
   const cars1 =  chosen ? cars.filter(x => x.type = chosen) : cars
  return (
    <div>
      <div className="flex justify-center overflow-hidden w-400 h-100 relative text-white">
        <button
          className="  w-10 h-full0 flex items-center justify-center text-blue-600"
          onClick={scrollToLeft}
        >
          <KeyboardDoubleArrowLeftIcon style={{ fontSize: 35 }}/>
        </button>
        <div
          className="flex  mr-6 ml-6   transition-transform ease-in-out duration-300"
          ref={contentRef}
        >
          {/* Wrap but{`px-8 py-2 mr-3 bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring rounded-full}`tons in a Fragment */}
          <>
          <button className={`px-4  mr-3 bg-gold-dark text-black focus:outline-none focus:ring rounded-full ${
  activeIndex === 0 ? "border-4 border-blue-500 hover:border-8" : ""
} transition-shadow`}>ALL</button>
            < SiBmw size={60} color="white"
              
              className={`px-2 rounded-full ${
                activeIndex === 1 ? "border-4 border-blue-500 hover:border-8" : ""
              } transition-shadow`}
             
             
            />
            < SiLamborghini size={60}
             color="gold"
              className={`px-2 rounded-md ${
                activeIndex === 2 ? "border-4 border-blue-500 hover:border-8" : ""
              } transition-shadow`}
            />
            
           
          </>
        </div>
        <button
          className="w-10 flex items-center justify-center text-blue-600"
         
          onClick={scrollToRight}
        >
       <KeyboardDoubleArrowRightIcon style={{ fontSize: "2rem" }} className="sm:text-3xl lg:text-4xl" />
        </button>
      </div>
{/* {show} */}
{/* <div className="flex justify-center items-center h-screen">
      <NavLink  onClick={() => handleFilterClick(parseInt(activeIndex))} to={`?type=${activeIndex}`} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none focus:ring">
        Filter
      </NavLink>
    </div> */}
  
    </div>
  );
};

export default HorizontalScrollbar;