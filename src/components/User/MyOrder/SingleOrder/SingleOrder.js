import React from 'react';

const SingleOrder = () => {
    return (
        <div className="flex flex-col lg:flex-row mt-4 ">
            <div className="w-10/12 mx-auto lg:w-6/12  flex flex-col px-3">

                <h2 className="text-left font-semibold
                 font-mono text-md lg:text-xl my-4 underline">Product Details</h2>
                <h2 className="text-left font-semibold
                 font-mono text-md lg:text-lg mt-2">Wall CLock</h2>

                <img src="https://via.placeholder.com/150" className="w-2/12" />
                <h3 className="text-left  font-medium font-mono text-lg  mt-2">Price: 300 USD</h3>

                <div className="w-full lg:w-8/12  mt-3">
                    <button className="px-4 py-1 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md">
                        Cancel Order</button>
                </div>
            </div>

            <div className="w-10/12 mx-auto lg:w-6/12 flex flex-col justify-center">
                <h2 className="text-left font-medium font-mono text-md lg:text-lg my-2 underline">Customer Details</h2>
                <h3 className="text-lg  text-left font-medium text-gray-600 font-poppins my-1">Name:
                    <span className="font-medium text-gray-900">  Shudipto</span></h3>
                <h3 className="text-lg text-left font-medium text-gray-600 font-mono my-1">Email:
                    <span className="font-medium text-gray-900"> shudipto@email.com</span> </h3>
                <h3 className="text-lg  text-left font-medium text-gray-600 font-mono my-1">Phone:
                    <span className="font-medium text-gray-900"> 018888888</span> </h3>
                <h3 className="text-lg text-left font-medium text-gray-600 font-mono my-1">Adress:
                    <span className="font-medium text-gray-900" > Dhaka</span></h3>

            </div>
        </div >
    );
};

export default SingleOrder;