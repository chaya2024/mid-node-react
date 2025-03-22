import {useState} from "react"
import Axios from "axios"
const UpdateUser=({onUpdate, Id})=>{
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [address, setAddress]= useState("")
    const [phone, setPhone]= useState("")

    const submitForm= async(e)=>{
        e.preventDefault()
        const {data}= await Axios.put("http://localhost:1234/Users/", {id:Id,name, email, address, phone})
        console.log(data)
        if (onUpdate) onUpdate();
        setName("");
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
export default UpdateUser