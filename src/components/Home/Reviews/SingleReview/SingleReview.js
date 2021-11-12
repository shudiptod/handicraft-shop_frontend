import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
const SingleReview = ({ review }) => {

    const stars = review.stars;
    let filledStar = [];
    let blackStar = [];
    for (let i = 0; i < stars; i++) {
        filledStar.push(0);
    }
    let nonStar = 0;
    if (stars < 5) {
        nonStar = 5 - stars;
        for (let i = 0; i < nonStar; i++) {
            blackStar.push(0);
        }
    }
    review.fillStar = [...filledStar];
    review.blackStar = [...blackStar];



    return (
        <div className="w-10/12 mx-auto h-64 bg-gray-300 flex flex-col">
            <div className="bg-red-500 h-6 w-full mt-0 mb-4">
            </div>
            <h3 className="text-3xl text-gray-900 font-caveat mb-8 text-center">{review.displayName}</h3>
            <h3 className="text-lg font-concertone text-right mr-4 text-yellow-600">{review.productName}</h3>
            <p className="text-sm font-concertone w-10/12 mx-auto text-justify text-gray-600">
                {review.details.split(' ', 15).join(' ') + ' . . .'}</p>
            <div className="flex justify-evenly w-4/12 mt-4 mb-2 mx-auto">
                {
                    review.fillStar.map(elm => <FaStar className="text-red-600 "></FaStar>)
                }
                {
                    review.blackStar.map(elem => <FaRegStar className="text-red-600" ></FaRegStar>)
                }

            </div>
        </div>
    );
};

export default SingleReview;