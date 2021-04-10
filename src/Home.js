import { useState, useEffect } from "react";
import BlogList from "./BlogList";
// imrs
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const deleteBlog = (id) => {
    const deletedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(deletedBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if(!res.ok) {
            throw new Error('Data tidak ditemukan')
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      })
  }, []);

  return (
    <div className="home">
      {/* nullish coalescing */}
      {error && <p>{ error }</p>}
      {isPending && <p>Loading... </p>}
      {blogs && <BlogList blogs = {blogs} title = 'All Blog' deleteBlog={deleteBlog}/>}
    </div>
  );
};

export default Home;
