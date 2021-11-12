import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SingleOrder from './SingleOrder/SingleOrder';


const MyOrder = () => {

    const { email } = useParams();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${email}`)
            .then(res => res.json())
            .then(data => setMyOrders([...data]));
    }, []);

    return (
        <div className="my-8">

            <h2 className="text-center text-blue-900 font-semibold font-poppins text-3xl my-5">Your Order List</h2>
            <div className="w-10/12 mx-auto grid grid-cols-1 divide-y-4 divide-solid divide-gray-900">
                {
                    myOrders.length === 0 ?
                        <div class="flex justify-center items-center">
                            <div class="
                        animate-spin
                        rounded-full
                        h-32
                        w-32
                        border-t-2 border-b-2 border-purple-500"
                            >
                            </div>
                        </div>
                        :
                        <div className="w-10/12 mx-auto grid grid-cols-1 divide-y-4 divide-solid divide-gray-900">
                            {
                                myOrders.map(order =>
                                    <SingleOrder key={order._id} order={order}
                                    />)
                            }
                        </div>
                }
            </div>



        </div>
    );
};

export default MyOrder;