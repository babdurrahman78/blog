import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, deleteBlog }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return (
          <div className="blog-previews" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
              <button onClick={() => deleteBlog(blog.id)}> Delete </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
