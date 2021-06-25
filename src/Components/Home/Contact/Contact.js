import React from 'react';
import { Row, Col } from 'antd';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import logo from '../../../images/Group 225.png'; 
import fb from '../../../images/Group 99.png'; 
import linkdin from '../../../images/Group 100.png'; 
import instagram from '../../../images/Group 105.png'; 

const Contact = () => {

    useEffect(() =>{
        AOS.init({duration: 2000});
    }, [])

    return (
        <div className="footer-container">
            <div  data-aos="fade-down"  className="container">
                <div className="footer-card">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row" lg={{ span: 8 }} md={{ span: 12 }} xs={{ span: 24 }}>
                            <img style={{ marginTop: '20px' }} src={logo} alt="" />
                            <p style={{ marginTop: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                            <hr style={{ color: '#00dbd0', width: '25%', border: '1px solid' }} />
                            <p style={{ marginTop: '20px' }}>© Copyright 2020 Nature</p>
                        </Col>
                        <Col className="gutter-row" lg={{ span: 8 }}  md={{ span: 12 }} xs={{ span: 24 }}>
                            <p style={{ marginTop: '20px' }}> Information </p>
                            <hr style={{ color: '#00dbd0', width: '25%', border: '1px solid' }} />                            
                            <p style={{ marginTop: '20px' }}> About </p>
                            <p style={{ marginTop: '20px' }}> Products </p>
                            <p style={{ marginTop: '20px' }}> Contact Us </p>
                            <p style={{ marginTop: '20px' }}> Terms of Service </p>
                        </Col>
                        <Col className="gutter-row" lg={{ span: 8 }}  md={{ span: 12 }} xs={{ span: 24 }}>
                        <p style={{ marginTop: '20px' }}> Follow Us </p>
                            <hr style={{ color: '#00dbd0', width: '25%', border: '1px solid' }} /> 
                            <img style={{ paddingRight: '20px' }} src={fb} alt="" />
                            <img style={{ paddingRight: '20px' }} src={linkdin} alt="" />
                            <img src={instagram} alt="" />

                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Contact;