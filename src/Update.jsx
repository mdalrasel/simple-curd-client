import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUser = useLoaderData()
    const handedUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateUser = { name, email }
        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method:'PUT',
            body:JSON.stringify(updateUser),
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0)
                alert('Successfully Updated User')
        })
    }
    return (
        <div>
            <h2>{loadedUser.name}</h2>
            <form onSubmit={handedUpdate}>
                <input type="text" name='name' defaultValue={loadedUser.name} /> <br />
                <input type="email" name='email' defaultValue={loadedUser.email} /> <br />
                <input type="submit" value='Update User' />
            </form>
        </div>
    );
};

export default Update;