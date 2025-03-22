import {useState} from "react"
import Axios from "axios"
const UpdatePost=({onUpdate, Id})=>{
    const [title, setTitle]= useState("")
    const [body, setBody]= useState("")

    const submitForm= async(e)=>{
        e.preventDefault()
        const {data}= await Axios.put("http://localhost:1234/Posts/", {_id:Id,title, body})
        console.log(data)
        if (onUpdate) onUpdate();
        setTitle("");
        setBody("");
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
export default UpdatePost