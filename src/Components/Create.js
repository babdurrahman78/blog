import "../css/Create.css";
import { useState } from "react";
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";

const Create = () => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [img, setImg] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, img, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog");
      setIsPending(false);
    }).then(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const newBlogs= data;
          const val = []
          newBlogs.map(blog => {
            val.push(blog.id);
            return val;
          });
          const id = Math.max(...val);
          history.push(`/blogs/${id}`);
        })
    })
  };

  return (
    <div>
      <div className="create">
        <h2>Add a new Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value=""
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label>Blog image:</label>
          <input
            type="text"
            required
            value={img}
            onChange={(e) => setImg(e.target.value)}
          ></input>
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          {isPending && <button className="pending">Adding Blog..</button>}
          {!isPending && <Button color="success">Add Blog</Button>}
        </form>
      </div>
    </div>
  );
};

export default Create;
