import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blog, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json',)
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])


    return (
        <div>
            
        </div>
    );
};

export default Blogs;