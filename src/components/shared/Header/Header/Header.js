import React, { useState } from 'react';
import Dashboard from '../../../Dashboard/Dashboard';

import logo from '../../../../images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
const Header = () => {
    const { user, loading } = useAuth();
    return (
        <div className="w-full mx-auto bg-transparent px-3 text-black py-4
         flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-3/12 flex items-center justify-evenly">
                <NavLink to="/">
                    <div className="container">
                        <img src={logo} />
                    </div>
                </NavLink>
                <NavLink to="/">
                    <h3 className="text-sm bg-gray-700 px-3 py-1 lg:text-lg text-white">Home</h3>
                </NavLink>
                <NavLink to="/explore">
                    <h3 className="text-sm bg-gray-700 px-3 py-1 lg:text-lg text-white">Explore</h3>
                </NavLink>
            </div>
            {
                user.email ?
                    <Link to="/dashboard" >
                        <button className="py-1 px-3 bg-gray-700 text-white font-mono hover:bg-gray-500">
                            Dashboard
                        </button>
                    </Link>
                    :
                    <NavLink to="/login">
                        <button className="py-1 px-3 bg-gray-700 text-white font-mono hover:bg-gray-500">
                            Login
                        </button>
                    </NavLink>
            }
        </div>
    );
};

export default Header;