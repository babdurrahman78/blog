import BlogList from "./BlogList";
<<<<<<< HEAD:src/Components/Home.js
import Navbar from "./Navbar";
import useFetch from "../api/useFetch";
=======
import useFetch from "./useFetch";
>>>>>>> parent of cd07618 (reorganize file structure):src/Home.js
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
