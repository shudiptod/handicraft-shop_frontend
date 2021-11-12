import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { NavLink } from 'react-router-dom';
import useFirebase from '../../../../hooks/useFirebase';
import userEvent from '@testing-library/user-event';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {

    const { logOut, user } = useFirebase();
    const [dbUser, setDbUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setDbUser(data));
    }, [user]);
    console.log(user);
    console.log(dbUser);

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className=" inline-flex justify-center w-full rounded-md border-2 
                border-gray-500 shadow-sm px-4 py-2 bg-white text-sm text-gray-900 font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    Dashboard
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                {dbUser.admin === true ?
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 
                font-poppins font-medium text-lg
                rounded-md shadow-lg bg-white 
                ring-1 ring-black ring-opacity-5 
                divide-y divide-gray-100 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <NavLink to="/myOrders" className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}>
                                        Manage All Orders
                                    </NavLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <NavLink to="/payment" className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}>
                                        Add A Product
                                    </NavLink>

                                )}
                            </Menu.Item>
                        </div>
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <NavLink to="/addReview" className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}>
                                        Make Admin
                                    </NavLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <NavLink to="/addReview" className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}>
                                        Manage Products
                                    </NavLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button to="/payment" className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )} onClick={logOut} >
                                        Logout
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                    :
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 
                font-poppins font-medium text-lg
                rounded-md shadow-lg bg-white 
                ring-1 ring-black ring-opacity-5 
                divide-y divide-gray-100 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <NavLink to={`/myOrders/${user.email}`} className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}>
                                        My Order
                                    </NavLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <NavLink to="/payment" className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}>
                                        Payment
                                    </NavLink>

                                )}
                            </Menu.Item>
                        </div>
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <NavLink to="/addReview" className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}>
                                        Give Review
                                    </NavLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button to="/payment" className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )} onClick={logOut} >
                                        Logout
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                }
            </Transition>
        </Menu >
    )
}