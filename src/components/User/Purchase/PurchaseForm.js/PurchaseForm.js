import React, { useState } from 'react';

const PurchaseForm = ({ user }) => {

    const [purchaseData, setPurchaseData] = useState({});

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


        console.log(purchaseData);
        e.preventDefault();
    }

    return (
        <div className="w-10/12 my-12">
            <h2 className="text-yellow-800 text-2xl font-semibold font-poppins text-center mb-12" >Please fill out the form:</h2>

            {
                user?.email && <form className="w-full  flex flex-col items-center" onSubmit={handleFormSubmit}>
                    <input className="w-4/12  border-2 border-gray-500 mb-5 px-2 py-1" name="name"
                        placeholder="Name" type="text" defaultValue="{user?.name}" onChange={handleInputChange} />
                    <input className="w-4/12 border-2 border-gray-500 mb-5 px-2 py-1" name="email"
                        placeholder="Email" defaultValue={user?.email} onChange={handleInputChange} />
                    <input className="w-4/12 border-2 border-gray-500 mb-5 px-2 py-1" name="contact"
                        placeholder="Phone No." type="month" onChange={handleInputChange} />
                    <input className="w-4/12 border-2 border-gray-500 mb-5 px-2 py-1" name="address"
                        placeholder="Adress" type="text" onChange={handleInputChange} />
                    <input type="submit" className="cursor-pointer bg-green-600 text-white text-lg font-semibold font-poppins px-3 py-1"
                        value="Confirm" />
                </form>
            }
        </div>
    );
};

export default PurchaseForm;