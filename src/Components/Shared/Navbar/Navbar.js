import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout, Anchor } from 'antd';
import 'antd/dist/antd.css';
import logo from '../../../images/Group 220.png';

const { Link } = Anchor;

const { Header } = Layout;

const Navbar = () => {

    return (
        <Layout className="mainLayout">
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="container">
                    <div className="header">
                        <div className="logo logo-name">
                            <div><img src={logo} class="img-fluid" alt="" /> </div>
                            <div style={{ paddingLeft: "10px" }}> organic</div>
                        </div>
                        {/* <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                            <Menu.Item key="home">Home</Menu.Item>
                            <Menu.Item key="product">Product</Menu.Item>
                            <Menu.Item key="about">About Us</Menu.Item>
                            <Menu.Item key="blog">Blog</Menu.Item>
                            <Menu.Item key="contact"><span className="contact-style">Contact</span></Menu.Item>
                        </Menu> */}

                        <Anchor mode="horizontal" defaultSelectedKeys={['hero']}>
                            <Link href="#hero" title="Home" />
                            <Link href="#product" title="Products" />                            
                            <Link href="#about" title="About Us" />                            
                            <Link href="#blog" title="Blog" />                            
                            <Link href="#contact" title="Contact" />                            
                        </Anchor>
                    </div>
                </div>
            </Header>
        </Layout>
    );
};

export default Navbar;