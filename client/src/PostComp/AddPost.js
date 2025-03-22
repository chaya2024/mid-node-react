import {useState} from "react"
import Axios from "axios"
const AddPost=({onAdd})=>{
    const [title, setTitle]= useState("")
    const [body, setBody]= useState("")
    const submitForm= async(e)=>{
        e.preventDefault()
        const {data}= await Axios.post("http://localhost:1234/Posts/", {title, body})
        console.log(data)
        if (onAdd) onAdd()
        setTitle("")
        setBody("")
    }
    return<>
    <form onSubmit={submitForm}>
        <input
        value={title}
        placeholder="Add title"
        onChange={(e)=>setTitle(e.target.value)}/>
        <input
        value={body}
        placeholder="Add body"
        onChange={(e)=>setBody(e.target.value)}/>
        <button type="submit">save</button>
    </form>
    
    </>
}
export default AddPost