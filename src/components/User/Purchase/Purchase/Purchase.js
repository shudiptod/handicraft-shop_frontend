import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import PurchaseForm from '../PurchaseForm.js/PurchaseForm';


const Purchase = () => {

    const { user } = useAuth();


    return (
        <div className="container mx-auto mt-16  flex flex-col items-center justify-between">
            <h2 className="text-indigo-800 text-3xl font-semibold font-poppins mb-12" >Confirm your Purchase</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-x-4 divide-opacity-90 divide-yellow-500 items-center justify-between">
                <div className="w-full h-64">
                    <img src="https://via.placeholder.com/150" className="w-11/12 h-full" />
                </div>
                <div className="w-11/12 px-3 flex flex-col justify-around">
                    <h2 className="text-yellow-800 text-xl font-semibold font-poppins text-left mb-4 underline" >Product Details</h2>
                    <h2 className="text-gray-800 text-lg font-semibold font-poppins text-left mb-4" >
                        <span className="underline text-gray-700">Name:</span> Clock
                    </h2>
                    <p className="text-gray-800 text-lg font-semibold font-poppins text-left mb-4" >
                        Placeholder.com is a free image placeholder service for web designers,
                        serving billions and billions of images each year.</p>
                    <h2 className="text-indigo-700 text-lg font-semibold font-poppins text-left mb-4" ><span className="underline text-gray-700">Price:</span> 300 BDT</h2>

                </div>
            </div>
            <PurchaseForm user={user} />

        </div>
    );
};

export default Purchase;