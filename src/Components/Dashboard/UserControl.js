import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import NavbarLogin from '../Login/NavbarLogin/NavbarLogin';
import firebase from "firebase/app";
import "firebase/auth";

const UserControl = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {userName, email} = loggedInUser;

    const handleLogOut = () => {
        firebase.auth().signOut()
        .then((res) => {  
            const signOutUser = {
                userName: '',
                email: '',
                error: '',
                photo: '',
                password: '',
                confirmPassword: '',
                isLoggedIn: false
            } 
            setLoggedInUser(signOutUser);
        })
        .catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="container">
            <NavbarLogin />

            <div className="row mt-5 pl-3 pt-5">
                <div className="col-md-5 offset-md-3 mx-auto">
                    <div className="logOut">
                        <button className="w-100 py-1 form-btn" onClick={handleLogOut}>Log Out</button>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default UserControl;