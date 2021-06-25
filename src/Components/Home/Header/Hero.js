import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Row, Col, Button } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'antd/dist/antd.css';
import heroImg1 from '../../../images/Group 228.png';
import heroImg2 from '../../../images/Group 195.png';
import { useEffect } from 'react';


const Hero = () => {
    
    useEffect(() =>{
        AOS.init({duration: 2000});
    }, [])
    return (
        <div id="hero">
            <div className="heroBlock ant-layout">
                <Row className="container hero-header" align="middle">
                    <Col data-aos="fade-left" lg={{ span: 12 }} md={{ span: 6 }} xs={{ span: 24 }}   className="hero-col-left">
                        <div className="hero-title">
                            <h2>Healthy life with</h2>
                            <h1>Nature Organic</h1>
                            <p>Vegetables are the edible parts of a plant that is used in cooking or can be eaten now.</p>
                            <Button style={{ backgroundColor: "#00dbd0" }} type="primary">Explore Now</Button>
                        </div>

                    </Col>
                    <Col data-aos="fade-right" lg={{ span: 12 }} md={{ span: 6 }}  xs={{ span: 24 }}  className="hero-col-right">
                        <div className="image-div-1">
                            <img src={heroImg1} alt="" />
                        </div>
                        <div className="image-div-2">
                            <img src={heroImg2} alt="" />
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Hero;