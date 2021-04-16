import BlogList from "./BlogList";
import Navbar from "./Navbar";
import useFetch from "../api/useFetch";
// imrs
const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div>
      <Navbar />
      <div className="home">
        {/* nullish coalescing */}
        {error && <p>{error}</p>}
        {isPending && <p>Loading... </p>}
        {blogs && <BlogList blogs={blogs} title="All Blog" />}
      </div>
    </div>
  );
};

export default Home;
