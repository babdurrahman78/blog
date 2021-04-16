import { Link } from "react-router-dom";
<<<<<<< HEAD:src/Components/BlogList.js
import "../css/BlogList.css";
=======
>>>>>>> parent of cd07618 (reorganize file structure):src/BlogList.js

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) => {
          return (
            <div className="blog-previews" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
