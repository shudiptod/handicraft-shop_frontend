import React, { useEffect, useState } from 'react';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'https://aqueous-depths-03250.herokuapp.com/products';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = (id) => {
        const check = window.confirm("Are you sure you want to delete");
        if (check) {
            fetch(`https://aqueous-depths-03250.herokuapp.com/products?id=${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product Deleted! Reloade to See change.');
                    }
                })
        }
        else {

        }
    }
    return (
        <div>
            <h2 className="text-center text-blue-900 font-semibold font-poppins text-3xl my-5">
                Manage Your Products
            </h2>

            <div className="grid grid-cols-3">
                {products.map(product =>
                    <div key={product._id} className="container px-2 py-2 flex flex-col items-center ">
                        <div className="w-11/12 mx-auto rounded-md flex-col px-3 shadow-2xl filter drop-shadow-2xl py-6 mb-8">
                            <div className="h-40 w-7/12 mx-auto rounded-md img-hover-zoom--slowmo bg-transparent">
                                <img src={product.img} className="h-full w-full mx-auto" />
                            </div>
                            <div className="w-10/12 mx-auto mt-5 flex flex-col items-center">
                                <h3 className="text-gray-900 text-xl text-center">{product.name}</h3>
                                <p className="text-gray-900 font-poppins text-sm my-3" >{product.details.substr(0, 40) + " . . ."}</p>
                                <h3 className="text-gray-900 text-xl text-center">{product.price + " BDT"}</h3>
                                <button className="flex items-center justify-between bg-red-500 py-1 px-3 mt-3 font-poppins font-semibold text-white
                                    rounded  hover:bg-red-700 border-2 hover:border-red-700"
                                    onClick={() => handleDelete(product._id)}
                                > Delete</button>

                            </div>

                        </div >

                    </div>
                )}
            </div>
        </div >
    );
};

export default ManageProducts;