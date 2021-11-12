import React, { useEffect, useState } from 'react';
import Card from '../../shared/Card/Card';
import './Explore.css';
const Explore = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/products';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className="flex flex-col items-center justify-evenly mt-8">
            <div className="flex flex-col w-full items-center justify-evenly py-32 explore-back">
                <h2 className="font-titillium font-bold text-4xl text-white filter drop-shadow-2xl">Explore Our Unique and Vast Collection</h2>
                <input placeholder=" Search "
                    className="w-4/12 h-12  mt-8 border-2 rounded border-white font-poppins px-3 bg-transparent text-white blur" />
            </div>
            <div className="mt-8 w-full mx-auto grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
                {
                    products.map(product => <Card product={product} key={product._id} />)
                }
            </div>
        </div>
    );
};

export default Explore;