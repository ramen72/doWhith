import React from 'react';
import './moneyTransactionCss.css'
import { FaCircleCheck } from "react-icons/fa6";

const MoneyTransactionComponent = () => {
    return (
        <>
            <section id="money">
        <div className="container">
            <div className="dFlex">
                <div className="left">
                     <iframe src="https://www.youtube.com/embed/NPaH8SaZ-MA?autoplay=0&mute=1" title="Leaning Video" width="600" height="600" frameborder="0"></iframe>
                </div>
                <div className="right">
                    <h2>Pay and receive money hassle-free</h2>
                    <p>
                        Many great people use our app and are trusted by them, so our app is highly recommended for you
                    </p>
                    <ul>
                        <li><i><FaCircleCheck /></i> Instantly move money between sites</li>
                        <li><i><FaCircleCheck /></i> Attractive appearance is not boring</li>
                        <li><i><FaCircleCheck /></i> Withdraw to your bank in second</li>
                        <li><i><FaCircleCheck /></i> Used by millions around the world</li>
                        <li><i><FaCircleCheck /></i> Message with same user of DoWhith</li>
                    </ul>
                </div>
            </div>
        </div>
     </section>
        </>
    );
};

export default MoneyTransactionComponent;