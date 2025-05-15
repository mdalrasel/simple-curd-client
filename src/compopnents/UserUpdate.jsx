
import React from 'react';
import { Link, useLoaderData } from 'react-router';

const UserUpdate = () => {
    const user = useLoaderData()
    console.log(user)

     const handleUpdateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email }
        console.log(updatedUser);

        // update user info in the db
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    console.log('update done', data)
                }
            })
    }
    return (
        <div>
             <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' defaultValue={user.name} className='border'/>
                <br />
                <input type="email" name='email' defaultValue={user.email}className='border' />
                <br />
                <input type="submit" value="Update User" className='btn btn-success my-5'/>
                
            </form>
            <Link className='btn btn-primary' to={-1}> Back</Link>
        </div>
    );
};

export default UserUpdate;