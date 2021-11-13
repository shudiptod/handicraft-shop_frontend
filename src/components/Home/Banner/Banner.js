import React from 'react';

import './Banner.css';

const Banner = () => {
    return (
        <div className="w-full h-64 lg:h-96 flex justify-center items-center banner">
            <div className="w-10/12 lg:w-5/12 h-4/6 lg:py-6 border-8 border-gray-50 rounded-xs flex flex-col items-center justify-evenly ">
                <h3 className="text-center text-white text-xl lg:text-4xl font-poppins font-semibold">Premium Quality Craft</h3>
                <p className="w-10/12  text-white text-md lg:text-xl text-left font-poppins font-semibold">Decorate your home with hand made unique crafts</p>
                <button className="py-1 px-3 bg-white text-gray-800 font-poppins font-semibold hover:text-white hover:bg-transparent border-2 hover:border-white">
                    Learn More</button>
            </div>
        </div>
    );
};

export default Banner;