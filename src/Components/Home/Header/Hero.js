import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Row, Col, Space } from 'antd';
import 'antd/dist/antd.css';


const Hero = () => {
    return (
        <div>
            <Navbar />
            <div className="heroBlock ant-layout">
                <Row style={{ padding: '0 100px' }}>
                    <Col span={12}>
                        Part-1
                    </Col>
                    <Col span={12}>col-12</Col>
                </Row>
            </div>
        </div>
    );
};

export default Hero;