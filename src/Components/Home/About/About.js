import React from 'react';
import { Row, Col, Carousel, Button } from 'antd';
import { StarTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';
import bgImg from '../../../images/Group 134.png'
import comment from '../../../images/Group 86.png'
import rateImage1 from '../../../images/blog-image-1.png';

const About = () => {
    const contentStyle = {
        height: '130px',
        color: 'black',
        textAlign: 'center',
      };

    return (
        <div>
            <div id="about" className="container blog-slide">
                <div className="about-container">
                    <Row>
                        <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                            <div className="img-style">
                                <img src={bgImg} alt="" />
                            </div>
                        </Col>

                        <Col span={12} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                            <div className="newsletter">
                                <img src={comment} alt="" />
                                <div className="rate-comment">
                                    <img src={rateImage1} alt="" />
                                    <h3>Jane Doe</h3>
                                    <div style={{ fontSize: '20px', marginBottom: '10px' }}>
                                        <StarTwoTone twoToneColor="#00dbd0" />
                                        <StarTwoTone twoToneColor="#00dbd0" />
                                        <StarTwoTone twoToneColor="#00dbd0" />
                                        <StarTwoTone twoToneColor="#00dbd0" />
                                        <StarTwoTone twoToneColor="#00dbd0" />
                                    </div>
                                    <div style={{ marginTop: '20px' }}>
                                        <Carousel autoplay>
                                            <div>
                                                <p style={contentStyle}>Thank you for all the amazing produce and products you deliver each week you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts and</p>
                                            </div>
                                            <div>
                                                <p style={contentStyle}>Thank you for all the amazing produce and products you deliver each week you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts and</p>
                                            </div>
                                            <div>
                                                <p style={contentStyle}>Thank you for all the amazing produce and products you deliver each week you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts and</p>
                                            </div>
                                            <div>
                                                <p style={contentStyle}>Thank you for all the amazing produce and products you deliver each week you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts and</p>
                                            </div>
                                        </Carousel>
                                    </div>

                                    <div className="subscribe-news">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="blog-style">
                                <h4>Subscribe to our Newsletter</h4>
                                <div style={{ marginTop: '20px' }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="read-about d-flex justify-content-between">
                                <h5>Enter your email address</h5>
                                <Button style={{ backgroundColor: "#00dbd0" }} type="primary">Explore Now</Button>
                                </div>
                            </div>
                        </Col>

                        <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                           
                        </Col>
                    </Row>
                </div>

            </div>
        </div>
    );
};

export default About;