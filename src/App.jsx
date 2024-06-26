import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
 const [bookmarks, setBookmarks] = useState([])
 const [readingTime, setReadingTime] = useState(0)
 
 
 const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
   }

  const handleMarkAsRead = time => {
    setReadingTime(readingTime + time);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
