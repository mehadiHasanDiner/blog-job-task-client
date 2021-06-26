import React, { useEffect } from 'react';
import Hero from '../Components/Home/Header/Hero';
import Products from '../Components/Home/Products/Products';
import Blog from '../Components/Home/Blog/Blog';
import About from '../Components/Home/About/About';
import Contact from '../Components/Home/Contact/Contact';
import { useState } from 'react';
import image1 from '../../src/images/Group 114.png';
import { useHistory } from 'react-router-dom';
import Navbar from '../Components/Home/Navbar/Navbar';


const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const history = useHistory();
    const handleBlog = (id) => {
        history.push(`/blog/${id}`);
    }

    return (
        <div>
            <Navbar/>
            <Hero />

            <div id="blog">
            <div data-aos="fade-up" className="blog-container">
                <img style={{ marginBottom: '20px' }} src={image1} alt="" />
                <h2>Read Our Blog</h2>
                <p className="blog-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            {
                blogs.map(blog => <Blog
                    key={blog._id}
                    blog={blog}
                    handleBlog = {handleBlog}
                />
                )
            }
            </div>
            <About />
            <Products />
            <Contact />
        </div>
    );
};

export default Home;