import React, { useState } from "react";

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');


  return ( 
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
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
        <button>add blog</button>
        <p>{title}</p>
        <p>{body}</p>
         <p>{author}</p>
      </form>
    </div>
   );
}
 
export default Create;