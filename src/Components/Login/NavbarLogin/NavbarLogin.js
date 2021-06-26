import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/Group 220.png';
// import { Navbar, NavItem, Nav } from 'react-bootstrap';


const NavbarLogin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { photo, email } = loggedInUser;

    return (

        // <Navbar collapseOnSelect expand="lg" className="custom-navbar " variant="dark">
        //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //     <Navbar.Collapse id="responsive-navbar-nav">
        //         <Nav className="mr-auto ">
        //             <Nav.Link href="#features">Features</Nav.Link>
        //             <Nav.Link href="#pricing">Pricing</Nav.Link>
                    
        //         </Nav>
        //         <Nav>
        //             <Nav.Link href="#deets">More deets</Nav.Link>
        //             <Nav.Link eventKey={2} href="#memes">
        //                 Dank memes
        //             </Nav.Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>


        <nav className="navbar navbar-expand-lg navbar-light custom-navbar fixed-top">
            <div className="container-fluid">
                <div className="w-100 d-flex justify-content-between">
                    <div className="logo">
                        <div className="logo logo-name">
                            <Link className="navbar-brand" to="/home"> <img src={logo} class="img-fluid" alt="" /> <span style={{ paddingLeft: "10px" }}> ORGANIC </span> </Link>
                        </div>
                    </div>
                    <div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                <li><Link to="/home" className="nav-link">Home</Link></li>
                                <li><Link to="/admin" className="nav-link">Admin</Link></li>
                                <li>
                                {
                                    !loggedInUser.isLoggedIn ?
                                        <Link to="/login" className="nav-link">Login</Link>
                                        :
                                        <Link to="/user" class="nav-link">{photo ? <img style={{ width: '30px', height: '30px', borderRadius: '100px' }} src={photo} alt="" /> : <p style={{ textTransform: 'capitalize', color: '#00dbd0', fontWeight: 'bold' }} id="custom-link">{email.slice(0, -9)}</p>}</Link>
                                }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarLogin;