import React from 'react';
import Hero from './Header/Hero';
import Products from './Products/Products';
import Blog from './Blog/Blog';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Products/>
            <Blog/>
        </div>
    );
};

export default Home;