import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Bilal");

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Bilal</option>
          <option value="yoshi">Alex</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
<div className="create">
  <h2>Add a new Page</h2>
</div>;
