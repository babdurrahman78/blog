import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardSubtitle } from 'reactstrap';
import "../css/BlogList.css";

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <div className="blog-list">
        <h2 className="blog-list-title">{title}</h2>
        {blogs.map((blog) => {
          return (
            <div className="blog-previews" key={blog.id}>
              <Card body>
                <CardTitle tag="h5">{blog.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Written by {blog.author}
                </CardSubtitle>
                <Link to={`/blogs/${blog.id}`}><Button color="success">Read More..</Button></Link>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
