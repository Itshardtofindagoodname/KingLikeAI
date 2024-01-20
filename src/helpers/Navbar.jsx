import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_nbg.png";

const Navbar = ({ model }) => {
  return (
    <header className="flex flex-col md:flex-row justify-center items-center md:justify-evenly w-full h-40 sm:h-24 bg-white bg-opacity-5 backdrop-blur-sm shadow-lg shadow-neutral-600">
      <div className="flex flex-col md:flex-row w-full p-4 items-center justify-center">
        <div className="container flex items-start justify-center md:justify-start px-6 mx-auto">
          <Link to="/home" className="flex flex-row items-center">
            <img className="h-8 w-6" src={Logo} alt="" />
            <div className="text-3xl font-bold text-neutral-50">ingLike</div>
          </Link>
        </div>
        <span className="text-white text-3xl font-bold md:mr-10 lg:w-80 mt-4 md:mt-0">
          <Link to="/search">{model}</Link>
        </span>
        <Link
          to="/nav"
          className=" w-40 md:mr-10 px-5 py-2 mt-4 md:mt-0 transition ease-in duration-200 uppercase rounded-full text-white hover:bg-neutral-100 hover:text-gray-600 border-2 border-gray-200 focus:outline-none"
        >
          Navigate
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
