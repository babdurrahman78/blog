import '../css/BlogDetails.css';
import { useParams, useHistory } from "react-router-dom";
import { Button } from 'reactstrap';
import useFetch from "../api/useFetch";

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
      <div className="blog-details">
      { error && <p>{ error }</p>}
      { isPending && <p>Loading... </p>}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <Button color="danger" className="delete-button" onClick={handleClick}>delete</Button>
        </article>
      )}
    </div>
    </div>
  );
};

export default BlogDetails;
