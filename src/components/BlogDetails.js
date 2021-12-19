import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from '../useFetch';


const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch('http://localhost:8082/blogs/' + id);

  const history = useHistory();

  const handleClick = () => {
    // in the fetch we can either use blog.id or id, same thing here
    fetch('http://localhost:8082/blogs/' + blog.id, { 
      method: 'DELETE'
    })
    .then(() => {
      history.push('/');
    });

  };

  return ( 
  <div className="blog-details">
    { isLoading && <div>loading...</div> }
    { error && <div>{error}</div> }
    { blog && (
      <article>
        <h2>{blog.title}</h2>
        <p>Written by: {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleClick}>delete</button>
      </article>
    )}
  </div> );
}
 
export default BlogDetails;