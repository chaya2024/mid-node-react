import { useEffect, useState } from "react";
import Axios from "axios"
import AddTodo from "./AddTodo"
import UpdateTodo from "./UpdateTodo";
const DeleteTodo= ({todo, onDelete})=>{
    const handleDelete= async()=>{
        const{data:responseData}= await Axios.delete("http://localhost:1234/Todos/", {
            data:{id:todo.id}
        })
        console.log(responseData)
        if (onDelete) onDelete()
    }
    return<div>
        <button onClick={handleDelete}>delete</button>
    </div>
}
const TodoList=()=>{
    const [todos, setTodos]= useState([])
    const fetchTodos= async()=>{
        const {data}= await Axios.get("http://localhost:1234/Todos/")
        setTodos(data)
    }
    useEffect(()=>{
        fetchTodos()
    }, [])
    if(todos.length===0) return <h2>no todos</h2>
    return <>
    <div>
        <AddTodo onAdd={fetchTodos} />
        {todos.map((todo, index)=>{
            return <div>
                {todo.title}
                <UpdateTodo onUpdate={fetchTodos} Id={todo._id} />
                <DeleteTodo onDelete={fetchTodos} todo={todo}/>
                </div>
        })}
    </div>
    </>
}
export default TodoList