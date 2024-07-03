import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-900 p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-700 pt-8">
        <div className="md:col-span-2 text-white">
          <p className="mb-4 text-lg">Subscribe to Our Newsletter</p>
          <div className="flex items-center mb-4">
            <input 
              type="email" 
              placeholder="Write Your Email" 
              className="flex-grow p-3 text-black rounded-l-md outline-none" 
            />
            <button className="bg-white text-black p-3 rounded-r-md">Subscribe</button>
          </div>
          <p className="mb-4 text-center">
            For Bookings Contact
            <ul className="flex justify-center space-x-4 mt-2">
              <li>999xxxxxxxx</li>
              <li>Nirvana@hotmail.com</li>
            </ul>
          </p>
          <p>
            Customer Support
            <p>contactnv@gmail.com</p>
          </p>
        </div>
        <div>
          <h1 className="text-white text-lg mb-4">Quick Links</h1>
          <ul className="text-white space-y-2">
            <li className="cursor-pointer hover:underline">Hotels</li>
            <li className="cursor-pointer hover:underline">Dining</li>
            <li className="cursor-pointer hover:underline">Wellness</li>
            <li className="cursor-pointer hover:underline">Weddings</li>
            <li className="cursor-pointer hover:underline">Events</li>
            <li className="cursor-pointer hover:underline">Magazine</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-lg mb-4">Connect with Us</h1>
          <ul className="flex space-x-4 justify-center">
            <li className="text-white text-3xl">
              <FaFacebook className="hover:text-blue-600" />
            </li>
            <li className="text-white text-3xl">
              <FaInstagramSquare className="hover:text-pink-600" />
            </li>
            <li className="text-white text-3xl">
              <FaYoutube className="hover:text-red-600" />
            </li>
            <li className="text-white text-3xl">
              <FaLinkedin className="hover:text-blue-500" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
