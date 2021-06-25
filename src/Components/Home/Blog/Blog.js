import React from 'react';
import { Card } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Blog = ({blog, handleBlog}) => {
    const {_id, imageURL, title, description} = blog;

    useEffect(() =>{
        AOS.init({duration: 2000});
    }, [])

    return (
        <div className="container-fluid">

            <div className="d-flex blog-container">
                <Card data-aos="fade-left" 
                    hoverable
                    style={{ width: 350 }}
                    cover={<img alt="example" src={imageURL}/>}
                >
                    <div style={{textAlign:'center'}}>
                    <h4 style ={{color:'#00dbd0'}}>{title}</h4>
                    <p>{description.slice(0, 100)}</p>
                    <h5 onClick = {() => handleBlog(_id)}>Read More</h5>
                    <hr style={{color:'#00dbd0', width:'50%', border: '1px solid', margin:'auto'}}/>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default Blog;