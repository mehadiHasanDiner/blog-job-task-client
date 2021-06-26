import React from 'react';
import { useState } from 'react';
import AddBlogs from './AddBlogs/AddBlogs';
import BlogList from './BlogList/BlogList';
import Sidebar from './Sidebar/Sidebar';

const Admin = () => {
    const [toggle, setToggle] = useState('');

    const handleSidebar = (path) => {
        setToggle(path);
    }

    return (
        <div style={{overflowX: 'hidden'}}>
        <div className="row">
            <div className="col-md-3">
                <Sidebar handleSidebar={handleSidebar} />
            </div>

            <div className="col-md-9">
                <div className="d-flex justify-content-between p-3 me-3">
                    <h5 className="">{toggle === 'addBlog' ? 'Add Blogs' : 'Blogs List'}</h5>
                    
                </div>

                {
                    toggle === 'addBlog' ? <AddBlogs /> : <BlogList/>
                }
            </div>
        </div>
    </div>
    );
};

export default Admin;