import React from 'react';
import './dashboardCSS.css'
import dashboardBottomImg from '../../assets/images/dashboardBottomImg.webp'
import dashboardImage from '../../assets/images/dashboardImage.webp'

const DashboardComponent = () => {
    return (
        <>
            <section id="dashboard">
        <img src={dashboardBottomImg} alt="DashboardBottomImg" width="1240" height="882" className="dashboardBottomImg"/>
        <div className="container">
            <ul className="dashCounter">
                <li>
                    <h2>2800+</h2>
                    <p>USER ACTIVE</p>
                </li>
                <li>
                    <h2>520+</h2>
                    <p>TRUSTED BY USER</p>
                </li>
                <li>
                    <h2>$180M+</h2>
                    <p>TRANSACTION</p>
                </li>
            </ul>
            <div className="dFlex">
                <div className="left">
                    <h2>Dashboard Feature Are Quite Complete</h2>
                    <div className="dashCardWrapper">
                        <div className="card">
                            <div className="cardHead">
                                <i className="fa-solid fa-arrow-up-right-dots"></i>
                                <h3>Quick Transaction Easier</h3>
                            </div>
                            <div className="cardBody">
                                <p>
                                    Perform various transactions (transfers, request, top up and more) very easily. 
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardHead">
                                <i className="fa-solid fa-arrow-up-right-dots"></i>
                                <h3>Quick Transaction Easier</h3>
                            </div>
                            <div className="cardBody">
                                <p>
                                    Perform various transactions (transfers, request, top up and more) very easily. 
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardHead">
                                <i className="fa-solid fa-arrow-up-right-dots"></i>
                                <h3>Quick Transaction Easier</h3>
                            </div>
                            <div className="cardBody">
                                <p>
                                    Perform various transactions (transfers, request, top up and more) very easily. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <p>
                        DoWhith makes it easy for you to make payments through your dashboard easily without having to leave the house. We use the most advanced systems so security is guaranted
                    </p>
                    <img src={dashboardImage} alt="dahsboardImage" width="731" height="712" className="dahsboardImage"/>
                </div>
            </div>
        </div>
     </section>
        </>
    );
};

export default DashboardComponent;