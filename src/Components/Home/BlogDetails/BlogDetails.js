import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarLogin from '../../Login/NavbarLogin/NavbarLogin';

const BlogDetails = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState({});
    const {imageURL, title, description} = blog;

    useEffect(() => {
        fetch(`http://localhost:5000/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id])

    return (
        <div>
            <NavbarLogin/>
            <div className="container">
                <div className="pt-5 mt-5 blog-detail-area">
                    <img className="img-fluid" src={imageURL} alt="" />
                    <h2>{title}</h2>
                    <p>
                        {description}
                                           </p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;