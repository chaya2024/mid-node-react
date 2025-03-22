import { useEffect, useState } from "react";
import Axios from "axios"
import AddPost from "./AddPost"
import UpdatePost from "./UpdatePost";
const AllPosts=()=>{
    const [posts, setPosts]= useState([])
    const fetchPosts= async()=>{
        const {data}= await Axios.get("http://localhost:1234/Posts/")
        setPosts(data)
    }
    useEffect(()=>{
        fetchPosts()
    }, [])
    if(posts.length===0) return <h2>no posts</h2>
    return <>
    <div>
        <AddPost onAdd={fetchPosts} />
        {posts.map((post, index)=>{
            return <div>
                {post.title}
                <UpdatePost onUpdate={fetchPosts} Id={post._id} />
                </div>
        })}
    </div>
    </>
}
export default AllPosts