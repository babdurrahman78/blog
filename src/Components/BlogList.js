import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardSubtitle, Row, Col } from "reactstrap";
import "../css/BlogList.css";

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <div className="blog-list">
        <h2 className="blog-list-title">{title}</h2>
        <Row>
          {blogs.map((blog) => {
            return (
              <Col sm="6">
                <Card body className="blog-previews" key={blog.id}>
                  <CardTitle tag="h5">{blog.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Written by {blog.author}
                  </CardSubtitle>
                  <Link to={`/blogs/${blog.id}`}>
                    <Button color="success">Read More..</Button>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default BlogList;
