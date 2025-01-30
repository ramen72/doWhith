import React from 'react';
import './footerCss.css'
import footerLogo from '../../assets/images/footerLogo.webp'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FooterComponent = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="dFlex">
                        <div className="left">
                            <a href="./index.html"><img src={footerLogo} alt="logo" className="logo" width="192" height="32"/></a>
                            <p>Only wallet you need to carry that allows making online payment</p>
                        </div>
                        <div className="right">
                            <ul>
                                <li>Featured</li>
                                <li><a href="#">Transaction</a></li>
                                <li><a href="#">Message</a></li>
                                <li><a href="#">Statistic</a></li>
                                <li><a href="#">Account</a></li>
                            </ul>
                            <ul>
                                <li>Planning</li>
                                <li><a href="#">Reguler</a></li>
                                <li><a href="#">Silver</a></li>
                                <li><a href="#">Gold</a></li>
                                <li><a href="#">Platinum</a></li>
                            </ul>
                            <ul>
                                <li>Contact Us</li>
                                <li><a href="#">Testimony</a></li>
                                <li><a href="#">Request Demo</a></li>
                                <li><a href="#">Start Free Trial</a></li>
                                <li><a href="#">Download App</a></li>
                            </ul>
                            <ul>
                                <li>Policies</li>
                                <li><a href="#">Term</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Licences</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerBottom">
                        <p>©2022 DoWhith LTD. All rights reserved by Alvin Elian</p>
                        <div className="footerIcon">
                            <i><FaFacebookF/></i>
                            <i><FaInstagram/></i>
                            <i><FaTwitter/></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterComponent;