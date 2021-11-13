import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';

import './Card.css';
const Card = ({ product }) => {
    const { _id, name, img, details, price } = product;
    const history = useHistory();
    return (
        <div className="w-11/12 mx-auto rounded-md flex-col px-3 shadow-2xl filter drop-shadow-2xl py-6 mb-8">
            <div className="h-40 w-7/12 mx-auto rounded-md img-hover-zoom--slowmo bg-transparent">
                <img src={img} className="h-full w-full mx-auto" />
            </div>
            <div className="w-10/12 mx-auto mt-5 flex flex-col items-center">
                <h3 className="text-gray-900 text-xl text-center">{name}</h3>
                <p className="text-gray-900 font-poppins text-sm my-3" >{details.substr(0, 40) + " . . ."}</p>
                <h3 className="text-gray-900 text-xl text-center">{price + " BDT"}</h3>

                <button className="flex items-center justify-between bg-gray-500 py-1 px-3 mt-3 font-poppins font-semibold text-white
                rounded hover:text-gray-500 hover:bg-white border-2 hover:border-gray-500"
                    onClick={() => history.push(`/purchase/${_id}`)}
                ><label className="mr-1"><FaShoppingCart></FaShoppingCart></label> Order</button>

            </div>

        </div >
    );
};

export default Card;