import React, { useState } from "react";
import pass from "../assets/pass.jpg";
import epicure from "../assets/epicure.jpg";
import wedding from "../assets/wedding.jpg";
import voyage from "../assets/voyage.jpg";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Exclusive() {
  const [index, setIndex] = useState(0);
  const arr = [
    {
      image: pass,
      title: "Neupass",
      Description: "Exclusive Membership program that offers special savings on stays, dinings, and spas",
    },
    {
      image: epicure,
      title: "Epicure",
      Description: "A world of benefits designed to indulge with member-only savings, unique vouchers, exclusive benefits",
    },
    {
      image: wedding,
      title: "Timeless Weddings",
      Description: "Let Your Special Day transcend into unforgettable celebration at our iconic destinations, enveloped in our legendary hospitality",
    },
    {
      image: voyage,
      title: "Voyage",
      Description: "Symphony of packages",
    },
  ];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % arr.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + arr.length) % arr.length);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white font-bold text-4xl m-5">~ Exclusively For You ~</h1>
      <p className="text-white m-5 text-center">
        Refinement and creativity intertwine with dreamlike destinations and soulful moments on each sojourn with Nirvana.
      </p>
      <div className="relative w-full max-w-lg h-[300px] overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {arr.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full h-[300px] flex flex-col items-center justify-center text-center"
            >
              <img className="w-full h-2/3 object-cover" src={item.image} alt={item.title} />
              <h1 className="text-xl mt-2 text-white">{item.title}</h1>
              <p className="text-sm mt-1 px-4 text-white">{item.Description}</p>
            </div>
          ))}
        </div>
        <MdNavigateBefore
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white w-10 h-10 bg-gray-800 bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-75"
        />
        <MdNavigateNext
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white w-10 h-10 bg-gray-800 bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-75"
        />
      </div>
    </div>
  );
}

export default Exclusive;
