import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import StarRating from './StarRating/StarRating';
const AddReview = () => {
    const { user } = useAuth();
    const [reviewData, setReviewData] = useState({
        stars: 0
    });
    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...reviewData };
        newData[field] = value;
        setReviewData(newData);
        e.preventDefault();
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        const newData = { ...reviewData };
        newData.email = user.email;
        newData.displayName = user.displayName;
        fetch('https://aqueous-depths-03250.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review added Successfully!');
                }
                else {
                    alert('Review not added!')
                }
            });

        document.getElementById(e.target.id).reset();

    };

    return (
        <div className="container mx-auto flex flex-col items-center justify-evenly py-10">
            <h2 className="text-2xl text-red-500 font-semibold font-poppins">
                Your Opinion Priors The Highest</h2>

            <form id="review-form" onSubmit={handleFormSubmit} className="container mx-auto flex flex-col items-center">
                <StarRating reviewData={reviewData} setReviewData={setReviewData} />
                <input type="text" placeholder="Product Name" name="productName"
                    className=" w-4/12 text-justify text-gray-800 font-poppins text-lg
                mx-auto px-3 py-2 mb-2 border-gray-600 border-2" onChange={handleChange}
                />
                <textarea type="text" placeholder="Suggestions, Complaints, Reviews" name="details"
                    className="w-4/12 text-justify text-gray-800 font-poppins text-xl 
                    mx-auto  px-3 py-3 whitespace-pre-wrap border-gray-600 border-2"
                    onChange={handleChange}
                />
                <h4 className="text-sm font-concertone text-yellow-600 mt-1">Write at least 20 words.</h4>
                <input type="submit" className="px-3 py-1 my-8 cursor-pointer bg-red-500
                     hover:bg-red-600 text-red-50 text-lg font-mono"
                    value="Submit Review" />
            </form>

        </div>
    );
};

export default AddReview;