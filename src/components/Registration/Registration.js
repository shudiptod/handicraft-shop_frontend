import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import AlertMessage from '../shared/AlertMessage/AlertMessage';

const Registration = () => {

    const { signInUsingGoogle, registerUser, user, authError, loading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

    useEffect(() => {
        if (user.email) {
            history.push('/');
        }
    }, [user]);


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result);
                history.push(redirect_url);
            })
    };
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        registerUser(loginData.email, loginData.password);


    }
    return (
        <div >
            {
                loading ?
                    <div className="conatiner mx-auto flex flex-col items-center justify-evenly mt-12">
                        <div class="flex justify-center items-center">
                            <div class="
                        animate-spin
                        rounded-full
                        h-32
                        w-32
                        border-t-2 border-b-2 border-purple-500">

                            </div>
                        </div>
                    </div>

                    :
                    <div className="conatiner mx-auto flex flex-col items-center justify-evenly mt-12">
                        {user?.email &&
                            <AlertMessage message={'success'}></AlertMessage>
                        }
                        {authError &&
                            <AlertMessage message={authError}></AlertMessage>}

                        <h3 className="text-gray-900 font-medium font-poppins text-2xl">Register</h3>
                        <form onSubmit={handleLoginSubmit}
                            className="w-3/12 flex flex-col items-center mt-6 mb-5">
                            <input type="email" name="email" onChange={handleOnChange}
                                className="focus:outline-none w-10/12 my-2 px-3 py-1 
                border-b-2 border-gray-900 font-poppins font-medium focus:border-b-2"
                                placeholder="User Email" />

                            <input type="password" name="password" onChange={handleOnChange}
                                className="focus:outline-none w-10/12 my-2 px-3 py-1
                 border-b-2 border-gray-900 font-poppins font-medium"
                                placeholder="Your Password" />
                            <input type="password" name="password2" onChange={handleOnChange}
                                className="focus:outline-none w-10/12 my-2 px-3 py-1
                 border-b-2 border-gray-900 font-poppins font-medium"
                                placeholder="Confirm Password" />

                            <input type="submit" className="w-10/12 mt-3 px-3 py-1 bg-gray-600 
                text-white font-poppins font-semibold cursor-pointer"
                                value="Register" />
                        </form>
                        <h3 className="text-gray-800 text-lg ">Already have an account?
                            <NavLink to="/login">
                                <span className="text-blue-900 font-poppins font-semibold"> Click Here</span>
                            </NavLink>
                            .</h3>

                        <div className="w-3/12 h-4 border-b-4 border-gray-600 border-dotted mb-4"></div>
                        <button onClick={handleGoogleLogin} className="px-3 py-1 bg-gray-500 text-white font-bold">Google</button>
                    </div>
            }

        </div>
    );
};

export default Registration;