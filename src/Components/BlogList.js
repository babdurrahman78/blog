import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardSubtitle, CardImg, CardText  } from "reactstrap";
import "../css/BlogList.css";

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <div className="blog-list">
        <h2 className="blog-list-title">{title}</h2>
          {blogs.map((blog) => {
            const abstract = `${(blog.body).substring(0, 97)}...`
            return (
                <Card body className="blog-previews" key={blog.id}>
                  <CardTitle tag="h5">{blog.title}</CardTitle>
                  <CardImg className="my-2" top width="100%" src={blog.img} alt="Card image cap" />
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Written by {blog.author}
                  </CardSubtitle>
                  <CardText>{abstract}</CardText>
                  <Link to={`/blogs/${blog.id}`}>
                    <Button color="success">Read More..</Button>
                  </Link>
                </Card>
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
