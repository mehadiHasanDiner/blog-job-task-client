import React from 'react';
import Hero from './Header/Hero';
import Products from './Products/Products';
import Blog from './Blog/Blog';
import About from './About/About';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Products/>
            <About/>
            <Blog/>
            <Contact/>
        </div>
    );
};

export default Home;