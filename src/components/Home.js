import React from "react";
import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8082/blogs');

  return ( 
    <div className="home">
      { error && <div>{error}</div> }
      { isLoading && <div>loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All blogs" /> }
    </div>
   );
}
 
export default Home;