<<<<<<< HEAD:src/Components/BlogDetails.js
import '../css/BlogDetails.css';
import Navbar from "./Navbar";
=======
>>>>>>> parent of cd07618 (reorganize file structure):src/BlogDetails.js
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data: blog, isPending, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }
  return (
    <div>
      <Navbar />
      <div className="blog-details">
      { error && <p>{ error }</p>}
      { isPending && <p>Loading... </p>}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
    </div>
  );
};

export default BlogDetails;
