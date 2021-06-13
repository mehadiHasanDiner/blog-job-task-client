import React from 'react';
import image1 from '../../../images/Group 114.png';
import image2 from '../../../images/Group 205.png';
import image3 from '../../../images/Group 207.png';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import Carousel from "react-elastic-carousel";
import Item from './style';

import { Row, Col } from 'antd';

import image4 from '../../../images/Group 39.png';
import image5 from '../../../images/Group 55.png';
import image6 from '../../../images/Group 64.png';



const Products = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 },
    ];

    return (
        <div id="product" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <img src={image1} alt="" />
                    <h2>Welcome to Nature</h2>
                </div>
                <div className="contentHolder">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <Row gutter={[16, 16]}>
                    <Col md={{ span: 8 }}>
                        <div className="content">
                            <div className="icon">
                                <img src={image3} alt="" />
                            </div>
                            <div className="icon">
                                <img src={image2} alt="" />
                            </div>
                            <div className="icon">
                                <img src={image3} alt="" />
                            </div>
                            <div className="icon">
                                <img src={image3} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>


                <div className="product-slide">
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                    <div className="contentHolder">
                        <h2>Proudly present by</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </ScrollAnimation>


                    <div className="product-div">
                        <Carousel breakPoints={breakPoints}>
                            <Item> <img src={image4} alt="" /> </Item>
                            <Item><img src={image6} alt="" /> </Item>
                            <Item><img src={image5} alt="" /> </Item>
                            <Item><img src={image6} alt="" /> </Item>
                            <Item> <img src={image4} alt="" /> </Item>
                            <Item><img src={image6} alt="" /> </Item>
                            <Item><img src={image5} alt="" /> </Item>
                            <Item><img src={image6} alt="" /> </Item>
                        </Carousel>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;