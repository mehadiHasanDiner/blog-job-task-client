import React from 'react';
import image1 from '../../../images/Group 114.png';
import card1 from '../../../images/blog-card-1.png'
import card2 from '../../../images/blog-card-2.png'
import card3 from '../../../images/blog-card-3.png'
import { Card } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Blog = () => {

    useEffect(() =>{
        AOS.init({duration: 2000});
    }, [])

    return (
        <div id="blog" className="container-fluid">
            <div data-aos="fade-up" className="blog-container">
                <img style={{ marginBottom: '20px' }} src={image1} alt="" />
                <h2>Read Our Blog</h2>
                <p className="blog-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="d-flex justify-content-between">
                <Card data-aos="fade-left" 
                    hoverable
                    style={{ width: 350 }}
                    cover={<img alt="example" src={card1}/>}
                >
                    <div style={{textAlign:'center'}}>
                    <h4 style ={{color:'#00dbd0'}}>Blog Post One</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    <h5>Read More</h5>
                    <hr style={{color:'#00dbd0', width:'50%', border: '1px solid', margin:'auto'}}/>
                    </div>
                </Card>

                <Card data-aos="fade-up" 
                    hoverable
                    style={{ width: 350 }}
                    cover={<img alt="example" src={card2}/>}
                >
                    <div style={{textAlign:'center'}}>
                    <h4 style ={{color:'#00dbd0'}}>Blog Post One</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    <h5>Read More</h5>
                    <hr style={{color:'#00dbd0', width:'50%', border: '1px solid', margin:'auto'}}/>
                    </div>
                </Card>

                <Card data-aos="fade-right" 
                    hoverable
                    style={{ width: 350 }}
                    cover={<img alt="example" src={card3}/>}
                >
                    <div style={{textAlign:'center'}}>
                    <h4 style ={{color:'#00dbd0'}}>Blog Post One</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    <h5>Read More</h5>
                    <hr style={{color:'#00dbd0', width:'50%', border: '1px solid', margin:'auto'}}/>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Blog;