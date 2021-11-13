import React, { useEffect, useState } from 'react';
import SingleUser from './SingleUser/SingleUser';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-depths-03250.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers([...data]));
    }, []);
    console.log(users);
    return (
        <div className="grid grid-cols-1 divide-gray-900 divide-y-2">
            <h2 className="text-center text-blue-900 font-semibold font-poppins text-3xl my-8">User List</h2>

            {
                users.map(user => <SingleUser key={user._id} user={user} />)
            }
        </div>
    );
};

export default MakeAdmin;