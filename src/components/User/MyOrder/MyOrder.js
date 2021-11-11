import React from 'react';
import SingleOrder from './SingleOrder/SingleOrder';

const MyOrder = () => {
    return (
        <div className="my-8">

            <h2 className="text-center text-blue-900 font-semibold font-poppins text-3xl my-5">Your Order List</h2>
            <div className="w-10/12 mx-auto grid grid-cols-1 divide-y-4 divide-solid divide-gray-900">
                <SingleOrder />
                <SingleOrder />
                <SingleOrder />
                <SingleOrder />
            </div>

            {/* {
                bookings.length === 0 ?
                    <img src={loader} className="w-10/12 mx-auto" />
                    :
                    <div className="w-10/12 mx-auto grid grid-cols-1 divide-y-4 divide-solid divide-gray-900">
                        {
                            bookings.map(booking =>
                                <SingleBooking key={booking._id} booking={booking}
                                ></SingleBooking>)
                        }
                    </div>
            } */}

        </div>
    );
};

export default MyOrder;