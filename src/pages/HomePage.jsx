import React from 'react';
import { Fragment } from 'react';
import NavBar from '../components/navBar/NavBar';
import Banner from '../components/banner/Banner';
import DashboardComponent from '../components/dashboard/DashboardComponent';
import MoneyTransactionComponent from '../components/moneyTransaction/MoneyTransactionComponent';
import SupportComponent from '../components/support/SupportComponent';
import PlanningComponent from '../components/planning/PlanningComponent';
import AboutComponent from '../components/about/AboutComponent';
import FooterComponent from '../components/footer/FooterComponent';

const HomePage = () => {
    return (
        <Fragment>
            <NavBar/>
            <Banner/>
            <DashboardComponent/>
            <MoneyTransactionComponent/>
            <SupportComponent/>
            <PlanningComponent/>
            <AboutComponent/>
            <FooterComponent/>
        </Fragment>
    );
};

export default HomePage;