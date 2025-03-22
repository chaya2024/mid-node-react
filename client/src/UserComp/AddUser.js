import {useState} from "react"
import Axios from "axios"
const AddUser=({onAdd})=>{
    const [name, setName]= useState("")
    const [username, setUsername]= useState("")
    const [email, setEmail]= useState("")
    const [address, setAddress]= useState("")
    const [phone, setPhone]= useState("")
    const submitForm= async(e)=>{
        e.preventDefault()
        const {data}= await Axios.post("http://localhost:1234/Users/", {name,username, email, address,phone})
        console.log(data)
        if (onAdd) onAdd();
        setName("");
        setUsername("");
        setEmail("");
        setAddress("");
        setPhone("");
    }
    return<>
    <form onSubmit={submitForm}>
        <input
        value={name}
        placeholder="Add name"
        onChange={(e)=>setName(e.target.value)}/>
        <input
        value={username}
        placeholder="Add username"
        onChange={(e)=>setUsername(e.target.value)}/>
        <input
        value={email}
        placeholder="Add email"
        onChange={(e)=>setEmail(e.target.value)}/>
        <input
        value={address}
        placeholder="Add address"
        onChange={(e)=>setAddress(e.target.value)}/>
        <input
        value={phone}
        placeholder="Add phone"
        onChange={(e)=>setPhone(e.target.value)}/>
        <button type="submit">save</button>
    </form>
    
    </>
}
export default AddUser