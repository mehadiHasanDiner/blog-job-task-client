import React from 'react';
import { Row, Col } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import 'antd/dist/antd.css';
import bgImg from '../../../images/Group 134.png'
import comment from '../../../images/Group 86.png'
import rateImage1 from '../../../images/blog-image-1.png';

const Blog = () => {
    return (
        <div>
            <div className="container blog-slide">
                <div className="blog-container">
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
                                    {/* <StarOutlined /> */}
                                </div>
                            </div>
                            <div className="read-blog">
                                <h4>read-blog</h4>

                            </div>
                        </Col>

                        <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                            3 col-order-responsive
                        </Col>
                    </Row>
                </div>

            </div>
        </div>
    );
};

export default Blog;