import { Link } from "react-router-dom";
import "../css/BlogList.css";

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <div className="blog-list">
        <h2 className="blog-list-title">{title}</h2>
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
