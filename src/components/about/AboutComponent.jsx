import React from 'react';
import './aboutCss.css'
import quotation from '../../assets/images/quotation.svg'
import triangle from '../../assets/images/triangle.png'
import favIcon from '../../assets/images/favIcon.webp'

const AboutComponent = () => {
    return (
        <>
            <section id="about">
                <div className="container">
                    <div className="dFlex">
                        <div className="left">
                            <h2>People Are Saying About DoWhith</h2>
                            <p>
                                Everithing you need to accept to payment and grow your money of manage anywhere on the planet
                            </p>
                            <img src={quotation} alt="Quotation" width="46" height="38" className="quotation"/>
                            <p className="abotPara">
                                I am very helped by this E-Wallet application, my days are very easy to use this application and it is very helpful in my life, even I can pay in a short time 😍
                            </p>
                            <span className="userName">- Aria Zidaniro</span>
                            <div className="aboutCircleWrapper">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>
                                    <img src={triangle} alt="triangle" width="8" height="14" className="triangle"/>
                                </span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="aboutCard">
                                <div className="aboutCardHead">
                                    <img src={favIcon} width="60" height="48" alt="Get Satart"/>
                                    <h2>Get Started</h2>
                                </div>
                                <form action="#" id="aboutForm">
                                    <div>
                                        <label for="email">Email</label>
                                        <input type="email" name="email" id="email" placeholder="your@email.xyz"/>
                                    </div>
                                    <div>
                                        <label for="message">Message</label>
                                        <textarea name="message" id="message" rows="5" placeholder="Write Your Message"></textarea>
                                    </div>
                                    <button type="submit">Request Demo</button>
                                    <p><span>or</span>Start Free Trial</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutComponent;