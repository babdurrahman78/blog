<<<<<<< HEAD:src/Components/Create.js
import "../css/Create.css";
import Navbar from "./Navbar";
=======
>>>>>>> parent of cd07618 (reorganize file structure):src/Create.js
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Bilal");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const { data: blogs } = useFetch("http://localhost:8000/blogs");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog");
      setIsPending(false);
      history.push(`/blogs/${blogs.length + 1}`);
    });
  };

  return (
    <div>
      <Navbar />
      <div className="create">
        <h2>Add a new Blog</h2>
        <form onSubmit={handleSubmit}>
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
            {blogs &&
              blogs.map((blog) => {
                return <option value={blog.author}>{blog.author}</option>;
              })}
          </select>
          {isPending && <button className="pending">Adding Blog..</button>}
          {!isPending && <button className="done">Add Blog</button>}
        </form>
      </div>
    </div>
  );
};

export default Create;
