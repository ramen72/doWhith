import React, { Fragment } from 'react';
import './NavBarCss.css'
import logo from '../../assets/images/logo.webp'

const NavBar = () => {
    return (
        <Fragment>
            <nav id="nav">
        <div className="container">
            <div className="dFlex">
                <a href="./index.html"><img src={logo} alt="logo" className="logo" width="148" height="34"/></a>
                <ul className="navMenu">
                    <li><a href="#">home</a></li>
                    <li><a href="#">product</a></li>
                    <li><a href="#">pricing</a></li>
                    <li><a href="#">testimony</a></li>
                </ul>
                <a href="#" className="btn active">Sign In</a>
            </div>
        </div>
     </nav>
        </Fragment>
    );
};

export default NavBar;