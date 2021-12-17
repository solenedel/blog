import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'my new blog', body: 'lorem ipsum', author: 'mario', id: 1 },
    { title: 'apple', body: 'banana', author: 'luigi', id: 2 },
    { title: 'kiwi', body: 'pear', author: 'mario', id: 3 }
  ]);

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };
 

  useEffect(() => {
    console.log('useEffect ran');
    console.log(name);
  }, [name]);


  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{name}</p>
    </div>
   );
}
 
export default Home;