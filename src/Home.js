import BlogList from "./BlogList";
import useFetch from "./useFetch"
// imrs
const Home = () => {
  const {data:blogs, setData, isPending, error} = useFetch('http://localhost:8000/blogs')

  const deleteBlog = (id) => {
    const deletedBlogs = blogs.filter((blog) => blog.id !== id);
    setData(deletedBlogs);
  };

  

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
