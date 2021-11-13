import React, { useEffect, useState } from 'react';
import Card from '../../shared/Card/Card';
import loader from '../../../images/circle-loader.gif';
const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'https://aqueous-depths-03250.herokuapp.com/products';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    return (
        <div className="mt-16">
            <h3 className="text-center text-gray-900 text-4xl font-caveat">Pick the best decors for your home</h3>
            {
                products.length === 0 ?
                    <img src={loader} className="w-8/12 h-96 mx-auto" alt="Loading" />
                    :
                    <div className="mt-16 w-full mx-auto grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
                        {
                            products.slice(0, products.length > 6 ? 6 : products.length).map(product => <Card product={product} />)
                        }
                    </div>
            }

        </div>
    );
};

export default Products;