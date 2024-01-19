import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, imageSrc, link, rating, category }) => {
  return (
    <div className="max-w-sm bg-neutral-200 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">{category}</h3>
      <div className="relative">
        <img className="w-full rounded-xl" src={imageSrc} alt={title} />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{rating}</p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{title}</h1>
      <div className="my-4">
        <Link to={link} className="mt-4 text-xl w-full text-white bg-black hover:text-black font-bold hover:bg-white p-2 rounded-xl shadow-lg">Start Using</Link>
      </div>
    </div>
  );
};

export default Card;
