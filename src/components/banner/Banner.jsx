import React from 'react';
import './bannerCss.css'
import illustration_1 from '../../assets/images/illustration_1.webp'
import illustration_2 from '../../assets/images/illustration_2.webp'
import illustration_3 from '../../assets/images/illustration_3.webp'
import bannerimg from '../../assets/images/bannerimg.webp'

const Banner = () => {
    return (
        <>
            <section id="banner">
                <img src={illustration_1} alt="bannerillustration" width="904" height="927" className="illustration_1"/>
                <img src={illustration_2} alt="bannerillustration" width="" height="" className="illustration_2"/>
                <img src={illustration_3} alt="bannerillustration" width="724" height="1337" className="illustration_3"/>
                <div className="container">
                    <div className="bannerWrapper">
                        <div className="bannerText">
                            <h1 className="bannerTitle">Manage your money with DoWhith</h1>
                            <p className="bannerPara">
                                Only wallet you need to carry that allows making online payment
                            </p>
                            <a href="#" className="btn">Request Demo</a>
                            <a href="#" className="btn">Learn More</a>
                        </div>
                        <img src={bannerimg} alt="Banner image" width="683" height="311" className="bannerImage"/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;