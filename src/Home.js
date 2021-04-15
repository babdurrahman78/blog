import BlogList from "./BlogList";
import useFetch from "./useFetch";
// imrs
const Home = () => {
  const {data:blogs, setData, isPending, error} = useFetch('http://localhost:8000/blogs')
  

  return (
    <div className="home">
      {/* nullish coalescing */}
      {error && <p>{ error }</p>}
      {isPending && <p>Loading... </p>}
      {blogs && <BlogList blogs = {blogs} title = 'All Blog'/>}
    </div>
  );
};

export default Home;
