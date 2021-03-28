import { useState } from 'react';
import BlogList from './BlogList';
// imrs
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Tajwid',body: 'puntenslur...', author: 'Bilal', id: 1},
        {title: 'Aqidah',body: 'puntenslur...', author: 'Nur Fajri', id: 2},
        {title: 'Fiqih',body: 'puntenslur...', author: 'Hadrami', id: 3},
        {title: 'Tafsir',body: 'puntenslur...', author: 'Hadrami', id: 4},
        {title: 'Sharaf',body: 'puntenslur...', author: 'Hadrami', id: 5},
    ])
    
    const deleteBlog = (id) => {
        const deletedBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(deletedBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = 'All Blog' deleteBlog={deleteBlog}/>
        </div>
     );
}
 
export default Home;