import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleDelete = (id) => {
        history.push('/');
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                console.log('product deleted!');
            }
        });
    }

    return (
        <div className="list-blog px-5">
            <div className="p-4 info">
                <div className="d-flex tHead mb-3 align-items-center justify-content-between">
                    <h6>No</h6>
                    <h6>Title</h6>
                    <h6>Action</h6>
                </div>
                {
                    blogs.map((blog, index) => 
                        <div className="d-flex px-4 mb-2 tBody align-items-center justify-content-between">
                            <p>{index + 1}</p>
                            <p className="title">{blog.title}</p>
                            <button className="btn btn-danger" onClick={() => handleDelete(blog._id)}> Delete </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BlogList;