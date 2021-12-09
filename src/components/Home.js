import React, { useState } from "react";

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'my new blog', body: 'lorem ipsum', author: 'mario', id: 1 },
    { title: 'apple', body: 'banana', author: 'luigi', id: 2 },
    { title: 'kiwi', body: 'pear', author: 'peach', id: 3 }
  ]);
 


  return ( 
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
           <h2>{ blog.title }</h2>
           <p>Written by { blog.author }</p>
        </div>
      ))}
    
    </div>
   );
}
 
export default Home;