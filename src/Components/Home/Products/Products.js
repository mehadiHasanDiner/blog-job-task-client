import React from 'react';
import image1 from '../../../images/Group 114.png';
import image2 from '../../../images/Group 205.png';
import image3 from '../../../images/Group 207.png';
import { Row, Col } from 'antd';

const products = [
    {
        key: '1',
        image2: image1,
        image3: image2,
        title: 'Organic Food',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores commodi tempore necessitatibus'

    }
]

const Products = () => {
    return (
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <img src={image1} alt="" />
                    <h2>Welcome to Nature</h2>
                </div>
                <div className="contentHolder">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <Row gutter={[16, 16]}>
                    {products.map(product => {
                        return (
                            <Col md={{ span: 8 }} key={product.key}>
                                <div className="content">
                                    <div className="icon">
                                        <img src={image3} alt="" />
                                    </div>
                                    <h3>{product.title}</h3>
                                    <p>{product.details}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
};

export default Products;