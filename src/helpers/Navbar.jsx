import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_nbg.png"

const Navbar = ({model}) =>{
    return(
        <header className="flex flex-col md:flex-row justify-center items-center md:justify-evenly w-full h-40 sm:h-24 bg-white bg-opacity-5 backdrop-blur-sm shadow-lg shadow-neutral-600">
        <div className="flex flex-row w-full">
            <div className="container flex items-start px-6 mx-auto">
                <Link to="/home" className="flex flex-row cursor-none">
                    <img className="h-8 w-6" src={Logo} alt="" />
                    <div className="text-3xl font-bold text-neutral-50">
                        ingLike
                    </div>
                </Link>
            </div>
            <span className="text-white text-3xl font-bold text-center md:mr-10 lg:w-80 cursor-none"><Link to="/search" className="cursor-none">{model}</Link></span>
            <Link to="/nav" className=" md:mr-10 px-5 py-2 cursor-none transition ease-in duration-200 uppercase rounded-full text-white hover:bg-neutral-100 hover:text-gray-600 border-2 border-gray-200 focus:outline-none">
                Navigate
            </Link>
        </div>
    </header>
    );
}

export default Navbar;