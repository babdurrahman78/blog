const BlogList = ({ blogs, title, deleteBlog }) => {
    
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            { blogs.map((blog) => {
            return (
                <div className="blog-previews" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>{ blog.body }</p>
                <button onClick={() => deleteBlog(blog.id)}> Delete </button>
            </div>
            )
        }) }
        </div>
     );
}
 
export default BlogList;