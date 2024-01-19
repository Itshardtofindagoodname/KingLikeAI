import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_nbg.png"

const Navbar = () =>{
    return(
        <header className="flex items-center justify-around w-full h-20 sm:h-24 bg-white bg-opacity-5 backdrop-blur-sm shadow-lg shadow-neutral-600">
        <div className="container flex items-start px-6 mx-auto">
            <Link to="/home" className="flex flex-row">
                <img className="h-8 w-6" src={Logo} alt="" />
                <div className="text-3xl font-bold text-neutral-50">
                    ingLike
                </div>
            </Link>
        </div>
        <Link to="/nav" className=" mr-10 px-5 py-2 transition ease-in duration-200 uppercase rounded-full text-white hover:bg-neutral-100 hover:text-gray-600 border-2 border-gray-200 focus:outline-none">
            Navigate
        </Link>
    </header>
    );
}

export default Navbar;