import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Pages/Home';
import AddBlogs from './Components/Dashboard/AddBlogs/AddBlogs';
import BlogDetails from './Components/Home/BlogDetails/BlogDetails';
import Login from './Components/Login/Login';
import Admin from './Components/Dashboard/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UserControl from './Components/Dashboard/UserControl';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    error: '',
    photo: '',
    password: '',
    confirmPassword: '',
    isLoggedIn: false
  });


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router className="App">

        <Switch>
          <Route path="/home">

            <Home></Home>
          </Route>
          {(loggedInUser.email === 'test@test.com' && loggedInUser.isLoggedIn) &&
            <Route path="/admin">
              <Admin/>
            </Route>
          }
          <Route path="/addBlogs">
            <AddBlogs />
          </Route>

          <PrivateRoute path="/blog/:id">
            <BlogDetails />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/user">
            <UserControl />
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
