import React from 'react';
import { Link, useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    console.log(user)
    return (
        <div>
            <div>
                <h2> Name : {user.name}</h2>
                <h2> Email : {user.email}</h2>
            </div>
            <div>
                <button className='btn btn-accent my-5'><Link to={-1}>Back</Link></button>
            </div>

        </div>
    );
};

export default UserDetails;