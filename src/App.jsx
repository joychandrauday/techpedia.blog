import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'

function App() {
  const [bookmarks,setBookmarks]=useState([])
  const [readingTime,setReadingTime]=useState(0)

  const handleAddToBookmark=blog=>{
    const newBookmarks= [...bookmarks,blog]
    setBookmarks(newBookmarks)
  }
  const handleTotalReadTime=time=>{
    const newReadingTime=readingTime+time;
    setReadingTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <div className='lg:flex gap-4'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleTotalReadTime={handleTotalReadTime}></Blogs>
        <Bookmark id={bookmarks.id} bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
      </div>
    </>
  )
}

export default App
