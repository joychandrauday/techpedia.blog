import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = ({handleAddToBookmark,handleTotalReadTime}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data=> setBlogs(data))
    },[])
    
    return (
        <div className="basis-2/3 ">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark}handleTotalReadTime={handleTotalReadTime}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;