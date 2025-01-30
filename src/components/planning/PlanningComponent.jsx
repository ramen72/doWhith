import React from 'react';
import './planningCss.css'
import { FaCircleCheck } from "react-icons/fa6";
const PlanningComponent = () => {
    return (
        <>
            <section id="planning">
                <div className="container">
                    <h2>Let's Planning With Us</h2>
                    <p className="planSubtitle">Let's manage your money with DoWith Dashboard make easily</p>
                    <div className="dFlex">
                        <div className="left">
                            <div className="item">
                                <span className="round"></span>
                                <div>
                                    <h2>REGULER</h2>
                                    <p>The package you will get when you join DoWith</p>
                                </div>
                                <h3>FREE</h3>
                            </div>
                            <div className="item">
                                <span className="round"></span>
                                <div>
                                    <h2 className="planSilver">SILVER</h2>
                                    <p>Packages for students who want to learn to manage finances</p>
                                </div>
                                <h3>$19<span>/ month</span></h3>
                            </div>
                            <div className="item">
                                <span className="round"></span>
                                <div>
                                    <h2 className="planGold">GOLD</h2>
                                    <p>Packages for employees who want to manage finances</p>
                                </div>
                                <h3>$39<span>/ month</span></h3>
                            </div>
                            <div className="item">
                                <span className="round"></span>
                                <div>
                                    <h2 className="planPlatinum">PLATINUM</h2>
                                    <p>Packages for companies who want to manage finances</p>
                                </div>
                                <h3>$59<span>/ month</span></h3>
                            </div>
                        </div>
                        <div className="right">
                            <div className="planRight">
                                <div className="timeWrapper">
                                    <span className="monthly">Monthly</span>
                                    <span className="active">Yearly</span>
                                </div>
                                <ul>
                                    <li>Active Monitoring <i><FaCircleCheck/></i></li>
                                    <li>Manage Money and Service <i><FaCircleCheck/></i></li>
                                    <li>Unlimited Customer Sevice <i><FaCircleCheck/></i></li>
                                    <li>Unlimited Transaction <i><FaCircleCheck/></i></li>
                                    <li>Unlock All Feature <i><FaCircleCheck/></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PlanningComponent;