import {useState} from "react"
import Axios from "axios"
const UpdateTodo=({onUpdate, Id})=>{
    const [title, setTitle]= useState("")
    const [tags, setTags]= useState([])

    const handleTagsInput = (e) => {
        const tagsArray = e.target.value.split(",").map(tag => tag.trim()); 
        setTags(tagsArray);}

    const submitForm= async(e)=>{
        e.preventDefault()
        const {data}= await Axios.put("http://localhost:1234/Todos/", {id:Id,title, tags})
        console.log(data)
        if (onUpdate) onUpdate();
        setTitle("");
        setTags([]);
    }
    return<>
    <form onSubmit={submitForm}>
    <input
        value={title}
        placeholder="Add title"
        onChange={(e)=>setTitle(e.target.value)}/>
                <input
          value={tags.join(", ")} 
          placeholder="Add tags"
          onChange={handleTagsInput} 
        />

        <button type="submit">save</button>
    </form>
    
    </>
}
export default UpdateTodo