import React from 'react';
import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({blog,handleAddToBookmark,handleTotalReadTime}) => {
    const {id,title,author,date,cover_image,hashtags,author_image,time_to_read,post_views}=blog;
    
    return (
        <div className='w-full text-left border rounded-lg my-6'>
            <div className="">
                <img className='w-full rounded-lg' src={cover_image} alt="" />
            </div>
            <div className='px-4 '>
                <div className="flex justify-between my-4 items-center">
                    <div className="flex items-center gap-4">
                        <div>
                            <img className='w-16 rounded-full' src={author_image} alt="" />

                        </div>
                        <div className='text-left capitalize '>
                            <h2 className="text-xl font-bold">{author}</h2>
                            <h3 className="textlg font-semibold">{date}</h3>
                        </div>
                    </div>
                    <div className="right">
                        <div className="flex gap-4 items-center capitalize font-semibold">
                            <h4>{time_to_read} minutes read</h4>
                            <h4 className='bg-none btn cursor-pointer text-3xl' onClick={()=> handleAddToBookmark(blog)}><CiBookmarkPlus /></h4>
                        </div>
                    </div>
                </div>
                <h1 className=' text-4xl font-bold text-left py-4'>{title}</h1>
                <div className="flex gap-4 justify-between">
                    <h3 className="text-m font-bold capitalize">total views: {post_views}</h3>
                    <div className='flex gap-4'>
                        {
                            hashtags.map(hastag=> <h1 className='text-slate-400 font-semibold'>#{hastag}</h1>)
                        }

                    </div>
                </div>
                <a className='border my-4 px-8 py-2 btn uppercase ' onClick={()=>handleTotalReadTime(blog.time_to_read)}>mark as read</a>
            </div>
        </div>
    );
};

export default Blog;