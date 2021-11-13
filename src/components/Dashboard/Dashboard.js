import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';




const Dashboard = () => {

    const { logOut, user } = useFirebase();
    const [dbUser, setDbUser] = useState({});
    useEffect(() => {
        fetch(`https://aqueous-depths-03250.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setDbUser(data));
    }, [user]);
    console.log(user);
    console.log(dbUser);

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl text-green-700 font-semibold text-center font-poppins my-8">Dashboard</h2>
            {dbUser.admin === true ?
                <div className="grid grid-cols-2 gap-8 text-white text-2xl font-poppins font-bold">

                    <NavLink to="/allorders" className="bg-red-600 w-4/12 h-40 rounded-lg place-self-end flex text-center items-center">
                        Manage All Orders
                    </NavLink>

                    <NavLink to="/makeadmin" className="bg-green-700 w-4/12 h-40 rounded-lg place-self-start flex text-center items-center justify-center">
                        Make Admin
                    </NavLink>

                    <NavLink to="/manageProducts"
                        className="bg-purple-700 w-4/12 h-40 rounded-lg place-self-end flex text-center items-center ">
                        Manage Products
                    </NavLink>
                    <NavLink to="/addproduct"
                        className="bg-indigo-700 w-4/12 h-40 rounded-lg place-self-start flex text-center items-center justify-center">
                        Add Product
                    </NavLink>

                    <div onClick={logOut} className="bg-yellow-900 filter brightness-200 w-4/12 h-40 rounded-lg place-self-end flex text-center items-center justify-center cursor-pointer">
                        Logout
                    </div>

                </div >
                :
                <div className="grid grid-cols-2 gap-8 text-white text-2xl font-poppins font-bold ">


                    <NavLink to={`/myOrders/${user.email}`}
                        className="bg-red-600 w-4/12 h-40 rounded-lg place-self-end flex text-center items-center justify-center">
                        My Order
                    </NavLink>

                    <NavLink to="/payment"
                        className="bg-green-700 w-4/12 h-40 rounded-lg place-self-start flex text-center items-center justify-center">
                        Payment
                    </NavLink>

                    <NavLink to="/addReview"
                        className="bg-purple-700 w-4/12 h-40 rounded-lg place-self-end flex text-center items-center justify-center">
                        Give Review
                    </NavLink>

                    <div onClick={logOut} className="bg-yellow-900 filter brightness-200 w-4/12 h-40 rounded-lg place-self-start flex text-center items-center justify-center cursor-pointer">
                        Logout
                    </div>


                </div>
            }
        </div >
    )
}

export default Dashboard;