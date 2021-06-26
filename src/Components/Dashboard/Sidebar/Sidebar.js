import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../../images/Group 220.png';



const Sidebar = ({handleSidebar}) => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const history = useHistory();
    // const handleLogOut = () => {

    //     firebase.auth().signOut()
    //     .then((res) => {  
    //         const signOutUser = {
    //             userName: '',
    //             email: '',
    //             error: '',
    //             photo: '',
    //             password: '',
    //             confirmPassword: '',
    //             isLoggedIn: false
    //         } 
    //         setLoggedInUser(signOutUser);
    //         history.push('/');
    //     })
    //     .catch((error) => {
    //         // An error happened.
    //     });
    // }

    return (
        <div className="sidebar">
            <h3 className="logo">
            <div className="logo logo-name">
                            <Link className="navbar-brand" to="/home"> <img src={logo} class="img-fluid" alt="" /> <span style={{ paddingLeft: "10px" }}> ORGANIC </span> </Link>
                        </div>
            </h3>

            <div className="d-flex flex-column sidebar-detail mx-3 justify-content-between">
                <div>
                    <ul className="list-unstyled pt-3">
                        <li onClick={() => handleSidebar('Blogs')}>
                            <FontAwesomeIcon icon={faListAlt} /> <span>Blog List</span>
                        </li>
                        <li onClick={() => handleSidebar('addBlog')}>
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Blog</span>
                        </li>
                    </ul>
                </div>

                {/* <div className="logout" onClick={handleLogOut}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>LogOut</span>
                </div> */}
            </div>
        </div>
    );
};

export default Sidebar;