import React, { useEffect, useState } from 'react';
import Card from '../../shared/Card/Card';
const Explore = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'fakedb.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className="flex flex-col items-center justify-evenly mt-8">
            <div className="flex flex-col w-full items-center justify-evenly bg-gray-600 py-16">
                <h2 className="font-titillium font-bold text-4xl text-white filter drop-shadow-2xl">Explore Our Unique and Vast Collection</h2>
                <input placeholder=" Search "
                    className="w-4/12 h-12  mt-8 border-4 rounded border-blue-600 font-poppins px-3" />
            </div>
            <div className="mt-16 w-full mx-auto grid grid-cols-1 lg:grid-cols-4 items-center justify-center">
                {
                    products.map(product => <Card product={product} />)
                }
            </div>
        </div>
    );
};

export default Explore;