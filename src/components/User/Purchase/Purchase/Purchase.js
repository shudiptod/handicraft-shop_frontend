import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import PurchaseForm from '../PurchaseForm/PurchaseForm';


const Purchase = () => {

    const { user } = useAuth();
    const { productId } = useParams();

    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://aqueous-depths-03250.herokuapp.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);



    const [purchaseData, setPurchaseData] = useState({});

    // form methods 
    const handleInputChange = e => {
        const field = e.target.name;
        const value = e.target.defaultValue || e.target.value;
        const newPurchaseData = { ...purchaseData };
        newPurchaseData[field] = value;
        setPurchaseData(newPurchaseData);
        e.preventDefault();
    };

    const handleFormSubmit = e => {
        const newPurchaseData = { ...purchaseData };

        if (newPurchaseData["email"] === undefined) {
            newPurchaseData["email"] = user?.email;
            setPurchaseData(newPurchaseData);
        }
        if (newPurchaseData["name"] === undefined) {
            newPurchaseData["name"] = user?.displayName || "Shudipto";
            setPurchaseData(newPurchaseData);
        }
        newPurchaseData.product = product;
        newPurchaseData.userMail = user.email;
        newPurchaseData.status = "pending";
        fetch('https://aqueous-depths-03250.herokuapp.com/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPurchaseData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Order added Successfully!');
                }
                else {
                    alert('Order not added Successfully!')
                }
            });
        document.getElementById(e.target.id).reset();
        e.preventDefault();
    }
    return (
        <div className="container mx-auto mt-16  flex flex-col items-center justify-between">
            <h2 className="text-indigo-800 text-3xl font-semibold font-poppins mb-12" >Confirm your Purchase</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-x-4 divide-opacity-90 divide-yellow-500 items-center justify-between">
                <div className="w-full h-64">
                    <img src={product.img} className="w-11/12 h-full" />
                </div>
                <div className="w-11/12 px-3 flex flex-col justify-around">
                    <h2 className="text-yellow-800 text-xl font-semibold font-poppins text-left mb-4 underline" >Product Details</h2>
                    <h2 className="text-gray-800 text-lg font-semibold font-poppins text-left mb-4" >
                        <span className="underline text-gray-700">Name:</span> {product.name}
                    </h2>
                    <p className="text-gray-800 text-sm font-light font-poppins text-justify mb-4" >{product.details}</p>
                    <h2 className="text-indigo-700 text-lg font-semibold font-poppins text-left mb-4" ><span className="underline text-gray-700">Price:</span> {product.price} BDT</h2>

                </div>
            </div>
            <PurchaseForm handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} user={user} />

        </div>
    );
};

export default Purchase;