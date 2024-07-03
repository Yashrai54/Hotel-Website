import { useState } from "react";
import hotel from "C:\\Users\\starr\\OneDrive\\Documents\\Desktop\\Hotel Website\\my-project\\src\\assets\\hotel.jpg";
import safari from "C:\\Users\\starr\\OneDrive\\Documents\\Desktop\\Hotel Website\\my-project\\src\\assets\\safari.jpg";
import palace from "C:\\Users\\starr\\OneDrive\\Documents\\Desktop\\Hotel Website\\my-project\\src\\assets\\palace.jpg";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Explore() {
  const [index, setIndex] = useState(0);
  const arr = [
    {
      image: hotel,
      title: "City Hotels",
    },
    {
      image: safari,
      title: "Enchanting Safari",
    },
    {
      image: palace,
      title: "Living Palaces",
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
      <h1 className="font-bold text-4xl text-white m-5">--Explore More</h1>
      <p className="m-3 text-white text-center">
        Relaxing beach paradises, thrilling urban getaways, exotic hill stations, and historic homes of royalty are all within reach.
      </p>
      <div className="relative w-full max-w-lg h-[300px] overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {arr.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full h-[300px] flex flex-col text-center justify-center items-center"
            >
              <img className="w-full h-2/3 object-cover" src={item.image} alt={item.title} />
              <h1 className="font-bold text-xl text-white mt-2">{item.title}</h1>
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

export default Explore;
