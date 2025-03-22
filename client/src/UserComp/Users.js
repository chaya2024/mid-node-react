import { useEffect, useState } from "react";
import Axios from "axios"
import AddUser from "./AddUser"
import UpdateUser from "./UpdateUser";
const Users=()=>{
    const [users, setUsers]= useState([])
    const fetchUsers= async()=>{
        const {data}= await Axios.get("http://localhost:1234/Users/")
        setUsers(data)
    }
    useEffect(()=>{
        fetchUsers()
    }, [])
    if(users.length===0) return <h2>no users</h2>
    return <>
    <div>
        <AddUser onAdd={fetchUsers} />
        {users.map((user, index)=>{
            return <div>
                {user.name}
                <UpdateUser onUpdate={fetchUsers} Id={user._id} />
                </div>
        })}
    </div>
    </>
}
export default Users