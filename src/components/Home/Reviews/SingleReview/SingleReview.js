import React from 'react';
import { FaStar } from "react-icons/fa";
const SingleReview = () => {
    return (
        <div className="w-10/12 mx-auto h-64 bg-gray-300 flex flex-col items-center">
            <div className="bg-red-500 h-6 w-full mt-0 mb-4">
            </div>
            <h3 className="text-3xl text-gray-900 font-caveat mb-8">Karl Marx</h3>
            <p className="text-sm font-concertone w-10/12 mx-auto text-justify text-gray-600">Review Australia fabulous vintage inspired dresses and fashion. Shop dresses, skirts, tops and occasionwear online or in store. Free shipping on orders over ...</p>
            <div className="flex justify-evenly w-4/12">
                <FaStar className="text-red-600"></FaStar>
                <FaStar className="text-red-600"></FaStar>
                <FaStar className="text-red-600"></FaStar>
                <FaStar className="text-red-600"></FaStar>
                <FaStar className="text-red-600"></FaStar>
            </div>
        </div>
    );
};

export default SingleReview;