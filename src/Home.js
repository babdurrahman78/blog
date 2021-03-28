import { useState, useEffect } from "react";
import BlogList from "./BlogList";
// imrs
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const deleteBlog = (id) => {
    const deletedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(deletedBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {/* nullish coalescing */}
      {isPending && <p>Loading... please wait</p>}
      {blogs && <BlogList blogs = {blogs} title = 'All Blog' deleteBlog={deleteBlog}/>}
    </div>
  );
};

export default Home;
