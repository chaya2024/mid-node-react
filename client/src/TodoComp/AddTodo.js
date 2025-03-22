import {useState} from "react"
import Axios from "axios"
const AddTodo=({onAdd})=>{
    const [title, setTitle]= useState("")
    const [tags, setTags]= useState([])
    const submitForm= async(e)=>{
        e.preventDefault()
        const {data}= await Axios.post("http://localhost:1234/Todos/", {title, tags})
        console.log(data)
        if(onAdd) onAdd()
        setTitle("")
        setTags([])
    }
    return<>
    <form onSubmit={submitForm}>
        <input
        value={title}
        placeholder="Add title"
        onChange={(e)=>setTitle(e.target.value)}/>
         <input
        value={tags}
        placeholder="Add tags"
        onChange={(e) => setTags(e.target.value.split(",").map(tag => tag.trim()))}
/>
        <button type="submit">save</button>
    </form>
    
    </>
}
export default AddTodo