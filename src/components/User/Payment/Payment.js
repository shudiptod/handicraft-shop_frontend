import React from 'react';
import { useHistory } from 'react-router';
import './Payment.css';
const Payment = () => {
    const history = useHistory();
    return (
        <div className="container mx-auto flex flex-col justify-center items-center -mt-5">
            <img src="https://i.ibb.co/x54ffxc/coming-soon-teaser-promo-display-background.jpg" className="w-5/12 h-96" />
            <h2 className="text-3xl text-yellow-900 font-poppins font-semibold -mt-5 mb-5 filter brightness-200">Payment System is Coming Soon</h2>
            <button className="bg-purple-900 text-white font-semibold font-poppins 
                rounded-tl-full rounded-br-full    px-8 py-3"
                onClick={() => { history.goBack() }}
            >
                Go Back
            </button>
        </div>
    );
};

export default Payment;