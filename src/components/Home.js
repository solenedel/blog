import React, { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'my new blog', body: 'lorem ipsum', author: 'mario', id: 1 },
    { title: 'apple', body: 'banana', author: 'luigi', id: 2 },
    { title: 'kiwi', body: 'pear', author: 'mario', id: 3 }
  ]);
 


  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" />
    </div>
   );
}
 
export default Home;