import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/reviews';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, []);

    return (
        <div className="flex flex-col items-center mt-8 my-16">
            <h2 className="text-4xl font-poppins font-semibold italic text-gray-800 my-8">Happy Customers</h2>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3">
                {
                    reviews.map(review => <SingleReview review={review}></SingleReview>)
                }
            </div>

        </div>
    );
};

export default Reviews;