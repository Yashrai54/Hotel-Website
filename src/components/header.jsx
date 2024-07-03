import { FaChevronDown } from "react-icons/fa";
import { RiArrowUpWideFill } from "react-icons/ri";
import video from "C:\\Users\\starr\\OneDrive\\Documents\\Desktop\\Hotel Website\\my-project\\src\\assets\\hotel.mp4";
import { useState } from 'react';

function Header() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="relative z-10 flex justify-between p-4 bg-black bg-opacity-50 text-white">
                <h1 className="text-xl m-3 font-bold md:text-3xl">
                    Nirvana
                </h1>
                <ul className="flex gap-3 md:gap-8 items-center">
                    <li>
                        <button className="bg-yellow-600 text-white md:px-4 md:py-2 rounded-md hover:bg-yellow-700 transition duration-300 ">
                            Login
                        </button>
                    </li>
                    <li className="cursor-pointer md:mx-2">
                        Booking
                    </li>
                    <li className="relative top-3 md:mx-2 cursor-pointer">
                        {toggle ? (
                            <>
                                Destinations 
                                <RiArrowUpWideFill onClick={() => setToggle(!toggle)} className="inline md:ml-2"/>
                            </>
                        ) : (
                            <>
                                Destinations 
                                <FaChevronDown onClick={() => setToggle(!toggle)} className="inline md:ml-2"/>
                            </>
                        )}
                    </li>
                </ul>
            </div>

            <div className="relative w-full h-screen overflow-hidden">
                <ul className={`absolute right-0 bg-yellow-600 text-white p-4 transition-transform duration-300 ${toggle ? 'translate-y-0' : 'translate-y-[-100%]'}`}>
                    <li className="py-2 px-4 hover:bg-yellow-700 transition duration-300">New Delhi</li>
                    <li className="py-2 px-4 hover:bg-yellow-700 transition duration-300">Kolkata</li>
                    <li className="py-2 px-4 hover:bg-yellow-700 transition duration-300">Bangalore</li>
                    <li className="py-2 px-4 hover:bg-yellow-700 transition duration-300">Mumbai</li>
                    <li className="py-2 px-4 hover:bg-yellow-700 transition duration-300">Chennai</li>
                    <li className="py-2 px-4 hover:bg-yellow-700 transition duration-300">Hyderabad</li>
                    <li className="py-2 px-4 hover:bg-yellow-700 transition duration-300">Pune</li>
                    <li className="py-2 px-4 hover:bg-yellow-700 transition duration-300">Ahmedabad</li>
                    <li className="py-2 px-4 hover:bg-yellow-700 transition duration-300">Jaipur</li>
                    <li className="py-2 px-4 hover:bg-yellow-700 transition duration-300">Surat</li>
                    <li className="py-2 px-4 hover:bg-yellow-700 transition duration-300">Lucknow</li>
                    <li className="py-2 px-4 hover:bg-yellow-700 transition duration-300">Varanasi</li>
                    
                </ul>
                <video src={video} autoPlay loop muted className="w-full h-full object-cover"></video> 
            </div>
        </>
    );
}

export default Header;
