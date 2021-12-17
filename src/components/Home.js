import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    fetch('http://localhost:8082/blogs') // get request
    .then(res => {
      return res.json() // parse JSON into JS object
    })
    .then(data => {
      console.log(data);
      setBlogs(data);
    })
  }, []);


  return ( 
    <div className="home">
      { blogs && <BlogList blogs={blogs} title="All blogs" /> }
    </div>
   );
}
 
export default Home;