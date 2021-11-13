import React from 'react';

const SingleUser = ({ user }) => {
    const { _id, displayName, email, admin } = user;

    const handleAdmin = () => {
        fetch(`https://aqueous-depths-03250.herokuapp.com/makeadmin?id=${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('User is admin now! Reloading to See changes.');
                    window.location.reload();
                }
            })
    }
    return (
        <div className="w-10/12 mx-auto lg:w-6/12 flex flex-col justify-center mb-8">
            <h2 className="text-left font-medium font-mono text-md lg:text-lg my-2 underline">User Details</h2>
            <h3 className="text-lg  text-left font-medium text-gray-600 font-poppins my-1">Name:
                <span className="font-medium text-gray-900">  {displayName}</span></h3>
            <h3 className="text-lg text-left font-medium text-gray-600 font-mono my-1">Email:
                <span className="font-medium text-gray-900"> {email}</span> </h3>

            {
                admin ?
                    <div className="bg-blue-600 flex justify-around text-white font-semibold font-poppins">
                        <h3 className="  text-lg  text-left font-medium  font-poppins my-1">
                            Already Admin
                        </h3>
                    </div>
                    :
                    <div className="bg-yellow-600 flex justify-around text-white font-semibold font-poppins">
                        <button onClick={handleAdmin} className="py-2 w-full hover:bg-yellow-500 ">
                            Make Admin
                        </button>
                    </div>
            }

        </div >

    );
};

export default SingleUser;