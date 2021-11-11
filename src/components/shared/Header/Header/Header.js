import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';

import logo from '../../../../images/logo.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
const Header = () => {
    const { user, loading } = useAuth();
    return (
        <div className="container mx-auto bg-transparent px-3 text-black flex justify-between items-center">
            <div className="container w-3/12 flex items-center justify-evenly">
                <NavLink to="/">
                    <div className="container">
                        <img src={logo} />
                    </div>
                </NavLink>
                <NavLink to="/">
                    <h3 className="text-lg">Home</h3>
                </NavLink>
                <NavLink to="/explore">
                    <h3 className="text-lg">Explore</h3>
                </NavLink>
            </div>
            {
                user.email ?
                    <Dashboard></Dashboard>
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