import { useEffect, useState } from "react";
import { Link } from "react-router";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, []);

    const handleAddUser = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data after creating user in the db', data)
                if (data.insertedId) {
                    newUser._id = data.insertedId;
                    const newsUsers = [...users, newUser];
                    setUsers(newsUsers);
                    alert('user added successfully.')
                    e.target.reset();
                }
            })
    }

    const handleUserDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remaingUser = users.filter(user => user._id !== id);
                    setUsers(remaingUser);
                    console.log('after data', data)

                }
            })

    }

    return (
        <div>
            <form onSubmit={handleAddUser} className='my-10'>
                <label>Name :</label>
                <input type="text" className='border' name='name' /><br />
                <label>Email :</label>
                <input type="text" className='border' name='email' /><br />
                <input type="submit" value="Add User" className='btn mt-2 btn-primary' />
            </form>

            <div>
                <h2>All Users:</h2>
                <ul>
                    {users.map(user => (
                        <li key={user._id}>{user.name} - {user.email} <br />
                            <button className="btn btn-primary">
                                <Link to={`/users/${user._id}`}>Details</Link>
                            </button>
                            <button className="btn btn-info">
                                <Link to={`/update/${user._id}`}>Edit</Link>
                            </button>
                            <button onClick={() => handleUserDelete(user._id)} className="btn btn-dash">x</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Users;
