import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import loader from '../../images/circle-loader.gif';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useFirebase();

    return (
        <div>
            {
                loading ?
                    <img src={loader} className="w-8/12 h-32 mx-auto" alt="Loading" />
                    :
                    <Route
                        {...rest}
                        render={({ location }) => user.email ? children : <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        ></Redirect>}
                    >

                    </Route>
            }
        </div>
    );
};

export default PrivateRoute;