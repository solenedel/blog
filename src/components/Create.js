import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author};

    setIsLoading(true);

    fetch('http://localhost:8082/blogs', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    })
    .then(() => {
      console.log('new blog added');
      setIsLoading(false);
      history.push('/');
    })
  };

  return ( 
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>blog title:</label>
        <input 
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
         <label>blog body:</label>
        <textarea
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>blog author:</label>
        <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
        </select>
        { !isLoading && <button>add blog</button> }
        { isLoading && <button disabled>adding blog...</button> }
        <p>{title}</p>
        <p>{body}</p>
         <p>{author}</p>
      </form>
    </div>
   );
}
 
export default Create;