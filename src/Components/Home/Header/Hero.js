import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import heroImg1 from '../../../images/Group 228.png';
import heroImg2 from '../../../images/Group 195.png';


const Hero = () => {
    return (
        <div id="hero">
            <Navbar />
            <div className="heroBlock ant-layout">
                <Row className="container hero-header" align="middle">
                    <Col span={12} className="hero-col-left">
                        <div className="hero-title">
                            <h2>Healthy life with</h2>
                            <h1>Nature Organic</h1>
                            <p>Vegetables are the edible parts of a plant that is used in cooking or can be eaten now.</p>
                            <Button style={{ backgroundColor: "#00dbd0" }} type="primary">Explore Now</Button>
                        </div>

                    </Col>
                    <Col span={12} className="hero-col-right">
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