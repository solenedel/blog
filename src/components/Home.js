import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    fetch('http://localhost:8082/blogs') // get request
    .then(res => {
      if (!res.ok) throw Error('could not fetch the data for that resource');

      return res.json(); // parse JSON into JS object
    })
    .then(data => {
      console.log(data);
      setBlogs(data);
      setIsLoading(false);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setIsLoading(false);
    })
  }, []);


  return ( 
    <div className="home">
      { error && <div>{error}</div> }
      { isLoading && <div>loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All blogs" /> }
    </div>
   );
}
 
export default Home;