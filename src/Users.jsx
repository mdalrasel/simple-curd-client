import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser)

    const handleDelete = _id => {
        console.log('delete', _id)
        fetch(`http://localhost:5000/usersDelete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0)
                    alert('Successfully Delete User')
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining)

            })
    }
    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>Name: {user.name} <br />  Email: {user.email}
                        <Link to={`/update/${user._id}`}>
                            <button >Update</button>
                        </Link>
                        <button onClick={() => handleDelete(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;