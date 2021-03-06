import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const AddBlogs = () => {
    const {  register, handleSubmit } = useForm();
    const [blogImage, setBlogImage] = useState(null);
    const [success, setSuccess] = useState('');


    const onSubmit = (data) => {
        const {title, description} = data;
        const blogData = {
            title: title,
            description: description,
            imageURL: blogImage
        };
        console.log(data);
        const url = `https://nameless-castle-52079.herokuapp.com/addBlogs`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
            .then(res => console.log('Blog Post Successfully', res))
            document.getElementById('title').value = '';
            document.getElementById('image').value = '';
        document.getElementById('description').value = '';

    }
    

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '2e640cfdaa455b72b248d5c6691a6ff3');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setBlogImage(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <Container className="mt-3">

                <Row>


                    <Col sm={12}>
                        <Form onSubmit={handleSubmit(onSubmit)}   className="p-3 info" style={{ backgroundColor: '#e1e1e1' }}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label><strong>Blog Title </strong></Form.Label>
                                    <input type="text" id="title" className="mt-2 form-control" {...register("title")} placeholder="Enter Title" required />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label><strong> Blog Content</strong></Form.Label>
                                    <textarea {...register("description")} id="description" className="mt-2 form-control"  cols="30" rows="12" required placeholder="Enter Content"></textarea>
                                </Form.Group>
                                <Form.Group as={Col}>                                   
                                <input type="file" id="image" className="mt-2 form-control" onChange={handleImageUpload} required />
                                </Form.Group>
                            </Form.Row>
                            <br/>
                            <Button style={{backgroundColor:'#00dbd0', border:'1px solid gray'}}  variant="primary" type="submit"> Published Blog </Button>
                        
                         {success &&
                        <p style={{fontWeight: '500'}} className="pt-4 text-center text-success">{success}</p>
                    }
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddBlogs;