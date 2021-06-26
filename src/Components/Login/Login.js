import React, {useContext, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import NavbarLogin from './NavbarLogin/NavbarLogin';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from: {pathname: '/'}};

    
    // custom sign in and login method
    const handleBlur = (event) => {
        let isFindValid = true;
        if (event.target.name === 'email') {
            isFindValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            isFindValid = /\d{1}/.test(event.target.value) && event.target.value.length > 7;
        }
        if (isFindValid) {
            const userInfo = {...loggedInUser};
            userInfo[event.target.name] = event.target.value;
            setLoggedInUser(userInfo);
        }
    }

    const handleSubmit = (event) => {
        if (newUser) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then((userCredential) => {
                    const {displayName, email, photoURL} = userCredential.user;
                        const signInUser = {
                            name: displayName,
                            email: email,
                            photo: photoURL,
                            isLoggedIn: true
                        }
                        setLoggedInUser(signInUser);
                        history.replace(from);
                })
                .catch((error) => {
                    const signInUser = {
                        error: error.message
                    }
                    setLoggedInUser(signInUser);
                });
        }

        if (!newUser) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then((userCredential) => {
                    const {displayName, email, photoURL} = userCredential.user;
                    const signInUser = {
                        name: displayName,
                        email: email,
                        photo: photoURL,
                        isLoggedIn: true
                    }
                    setLoggedInUser(signInUser);
                    history.replace(from);
                })
                .catch((error) => {
                    const signInUser = {
                        error: error.message
                    }
                    setLoggedInUser(signInUser);
                });
        }

        event.preventDefault();
    }

    // google sign in method
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const {displayName, email, photoURL} = result.user;
                const signInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    isLoggedIn: true
                }
                setLoggedInUser(signInUser);
                history.replace(from);
            })
            .catch((error) => {
                const signInUser = {
                    error: error.message
                }
                setLoggedInUser(signInUser);
            });
    }
console.log(loggedInUser)


    return (
        <div className="mt-5">
            <NavbarLogin/>

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="pt-5 login-method">
                        <form action="" onSubmit={handleSubmit}>
                            <h3 className="py-3">{newUser ? 'Create an account' : 'Log in'}</h3>
                            {newUser && 
                                <div>
                                    <input type="text" name="name" onBlur={handleBlur} placeholder="Name" className="form-control mb-3" required/>
                                </div> 
                            }
                            <div>
                                <input type="email" name="email" onBlur={handleBlur} placeholder='Email' className="form-control mb-3" value="test@test.com" required/>
                            </div>
                            <div>
                                <input type="password" name="password" onBlur={handleBlur} placeholder="Password" className="form-control mb-3" value="#2021dev" required/>
                            </div>
                           
                            {/* {validation.error && <p className="text-danger">{validation.error}</p>} */}
                            <input type="submit" value={newUser ? 'Create an account' : 'Log in'} className="btn btn-secondary w-100 form-btn mt-4"/>
                            <p onClick={() => setNewUser(!newUser)}>{newUser ? "Already have an account?" : "Don't have an account?"} <span>{newUser ? 'Log in' : 'Create an account'}</span></p>
                            {/* {loggedInUser.error && <p className="text-danger">{loggedInUser.error}</p>} */}
                        </form>

                        <div className="brand-login mb-5">
                            <button onClick={handleGoogleSignIn} className="w-100 form-btn"><span><FontAwesomeIcon icon={faGoogle} /></span>   Continue With Google</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    );
};

export default Login;