import "../css/Create.css";
import { useState } from "react";
import { Button } from "reactstrap";
import { useParams, useHistory } from "react-router-dom";

const Update = ({blogs}) => {
  const { id } = useParams();
  const history = useHistory();
  // const { data: blog } = useFetch(
  //   "http://localhost:8000/blogs/" + id
  // )
  const data = []
  for(let i = 0;i<blogs.length;i++){
    if(blogs[i]["id"] == id){
      data.push(blogs[i])
    }
  }
  const blog = data[0];
  const [title, setTitle] = useState(blog.title);
  const [body, setBody] = useState(blog.body);
  const [author, setAuthor] = useState(blog.author);
  const [img, setImg] = useState(blog.img);
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, img, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div>
      <div className="create">
        <h2>Update the blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
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
          {isPending && <button className="pending">Updating Blog..</button>}
          {!isPending && <Button color="success">Update Blog</Button>}
        </form>
      </div>
    </div>
  );
};

export default Update;
