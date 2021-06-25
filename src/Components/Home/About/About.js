import React from 'react';
import { Row, Col, Carousel, Button } from 'antd';
import { StarTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgImg from '../../../images/Group 134.png'
import comment from '../../../images/Group 86.png'
import rateImage1 from '../../../images/blog-image-1.png';
import { useEffect } from 'react';

const About = () => {

    useEffect(() =>{
        AOS.init({duration: 2000});
    }, [])


    const contentStyle = {
        height: '150px',
        color: 'black',
        textAlign: 'center',
        breakpoints:{
            786:{
                height:'250px'
            },
            499: {
                height:'300px'
            }
        }
      };

    return (
        <div>
            <div className="container blog-slide">
                <div  id="aboutSection" className="about-container">
                    <Row>
                        <Col  span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                            <div data-aos="fade-left" className="img-style">
                                <img src={bgImg} alt="" />
                            </div>
                        </Col>

                        <Col span={12} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                            <div className="newsletter">
                                <img src={comment} alt="" />
                                <div className="rate-comment">
                                    <div data-aos="fade-right" >
                                    <img src={rateImage1} alt="" />
                                    <h3>Jane Doe</h3>
                                    <div style={{ fontSize: '20px', marginBottom: '10px' }}>
                                        <StarTwoTone twoToneColor="#00dbd0" />
                                        <StarTwoTone twoToneColor="#00dbd0" />
                                        <StarTwoTone twoToneColor="#00dbd0" />
                                        <StarTwoTone twoToneColor="#00dbd0" />
                                        <StarTwoTone twoToneColor="#00dbd0" />
                                    </div>
                                    </div>
                                    <div  data-aos="fade-up" style={{ marginTop: '20px' }}>
                                        <Carousel autoplay>
                                            <div st>
                                                <p style={contentStyle}>Thank you for all the amazing produce and products you deliver each week you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts</p>
                                            </div>
                                            <div>
                                                <p style={contentStyle}>Thank you for all the amazing produce and products you deliver each week you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts</p>
                                            </div>
                                            <div>
                                                <p style={contentStyle}>Thank you for all the amazing produce and products you deliver each week you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts</p>
                                            </div>
                                            <div>
                                                <p style={contentStyle}>Thank you for all the amazing produce and products you deliver each week you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts</p>
                                            </div>
                                        </Carousel>
                                    </div>

                                    <div className="subscribe-news">
                                        
                                    </div>
                                </div>
                            </div>
                            <div data-aos="flip-left"  className="about-style">
                                <h4>Subscribe to our Newsletter</h4>
                                <div style={{ marginTop: '20px' }}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="read-about d-flex justify-content-between">
                                <p style={{fontWeight:'bold'}}>Enter your email address</p>
                                <Button style={{ backgroundColor: "#00dbd0" }} type="primary">Subscribe</Button>
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