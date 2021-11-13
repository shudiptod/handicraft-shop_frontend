import React from 'react';

const SingleAdminOrder = (props) => {
    const { _id, name, email, address, contact, status, product } = props?.order;
    const handleStatus = () => {

        fetch(`https://aqueous-depths-03250.herokuapp.com/updateStatus?id=${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order Approved! Reloading to See changes.');
                    window.location.reload();
                }
            })
    }
    return (
        <div className="flex flex-col lg:flex-row mt-4 ">
            <div className="w-10/12 mx-auto lg:w-6/12  flex flex-col px-3">

                <h2 className="text-left font-semibold
             font-mono text-md lg:text-xl my-4 underline">Product Details</h2>
                <h2 className="text-left font-semibold
             font-mono text-md lg:text-lg mt-2">{product?.name}</h2>

                <img src={product?.img} className="w-2/12" alt=" " />
                <h3 className="text-left  font-medium font-mono text-lg  mt-2">Payable: {product.price} USD</h3>
                {
                    status === "pending" ?

                        <div className="w-full lg:w-8/12  mt-3">
                            <button onClick={handleStatus} className="px-4 py-1 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md">
                                Approve Order</button>
                        </div>
                        :
                        <div className="w-full lg:w-8/12  mt-3">
                            <button className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md">
                                Order Shipped</button>
                        </div>

                }
            </div>

            <div className="w-10/12 mx-auto lg:w-6/12 flex flex-col justify-center">
                <h2 className="text-left font-medium font-mono text-md lg:text-lg my-2 underline">Customer Details</h2>
                <h3 className="text-lg  text-left font-medium text-gray-600 font-poppins my-1">Name:
                    <span className="font-medium text-gray-900">  {name}</span></h3>
                <h3 className="text-lg text-left font-medium text-gray-600 font-mono my-1">Email:
                    <span className="font-medium text-gray-900"> {email}</span> </h3>
                <h3 className="text-lg  text-left font-medium text-gray-600 font-mono my-1">Phone:
                    <span className="font-medium text-gray-900"> {contact}</span> </h3>
                <h3 className="text-lg text-left font-medium text-gray-600 font-mono my-1">Adress:
                    <span className="font-medium text-gray-900" > {address}</span></h3>

            </div>
        </div >
    );
};

export default SingleAdminOrder;