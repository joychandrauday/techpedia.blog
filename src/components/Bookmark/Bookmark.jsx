import React from 'react';
import Blogs from './../Blogs/Blogs';

const Bookmark = ({bookmarks,readingTime}) => {
    const{title,time_to_read,id}=bookmarks;
    return (
        <div className='basis-1/3 my-6'>
            <div className='border border-blue-400 bg-gray-200  rounded-lg p-6'>
                <div className='flex justify-between items-center text-2xl capitalize font-bold text-blue-700 '>
                    <h1>total reading time:</h1>
                    <h1>{readingTime} minutes</h1>
                </div>
            </div>
            <div className='text-xl capitalize font-bold my-6 border bg-gray-200 rounded-lg p-6 '>
                <div className='flex justify-between mb-4'>
                    <h1>book marked Blogs</h1>
                    <h1>{bookmarks.length}</h1>

                </div>
                {
                    bookmarks.map(bookmark => <h2 className='text-left text-lg p-4 bg-white mb-2 rounded'>{bookmark.title}</h2>)
                }
            </div>
        </div>
    );
};

export default Bookmark;