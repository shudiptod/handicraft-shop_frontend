import React, { useState } from 'react';
import Star from './Star';
import './StarStyle.css';
const RatingStars = ({ reviewData, setReviewData }) => {
    const [gradeIndex, setGradeIndex] = useState();
    const GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
    const activeStar = {
        fill: 'crimson'
    };

    const changeGradeIndex = (index) => {
        setGradeIndex(index);
        const newReviewData = { ...reviewData };
        newReviewData["stars"] = parseInt(index) + 1;
        setReviewData(newReviewData);
    }

    return (
        <div className="star-container">
            <h1 className="result text-yellow-900 filter brightness-200 text-3xl 
            font-semibold font-poppins">
                {GRADES[gradeIndex] ? GRADES[gradeIndex] : 'You didn\'t review yet'}</h1>
            <div className="stars">
                {
                    GRADES.map((grade, index) => (
                        <Star
                            index={index}
                            key={grade}
                            changeGradeIndex={changeGradeIndex}
                            style={gradeIndex >= index ? activeStar : {}}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default RatingStars;
