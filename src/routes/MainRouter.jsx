import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import LandingPage from '../pages/LandingPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import EditProfile from '../pages/EditProfilePage';
import ProfilePage from '../pages/ProfilePage';
import DashboardPage from '../pages/DashboardPage';
import AboutPage from '../pages/AboutPage';

function MainRouter(){
    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route path="/" component={LandingPage} exact/>
                <Route path="/register" component={RegisterPage} exact/>
                <Route path="/login" component={LoginPage} exact/>
                <Route path="/editprofile" component={EditProfile} exact/>
                <Route path="/profile" component={ProfilePage} exact/>
                <Route path="/dashboard" component={DashboardPage} exact/>
                <Route path="/about" component={AboutPage} exact/>
            </Switch>
            <Footer></Footer>
        </Router>
    )
}

export default MainRouter;