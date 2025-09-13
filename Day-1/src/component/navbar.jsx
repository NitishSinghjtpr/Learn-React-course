import React from "react";
import "./navbar.css"


const Navbar=()=> {
    
  return (
    <nav className="bg-blue-600 style1 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold text-success">MyWebsite</div>

      {/* Links */}
      <ul className="flex li1 space-x-6">
        <li>
          <a href="#home" className="hover:text-gray-200">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-200">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-gray-200">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-200">
            Contact
          </a>
        </li>
      </ul>

      {/* Button */}
      <button className="bg-danger text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
        Login
      </button>
       <button className="bg-danger text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100">
       sign up
      </button>
    </nav>
  );
};

export default Navbar;
