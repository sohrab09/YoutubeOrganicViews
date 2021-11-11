import React from 'react';
import Element from '../Element/Element';
import Service from '../Service/Service';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import OrganicViews from '../OrganicViews/OrganicViews';
import Subscriber from '../Subscriber/Subscriber';
import BestChoice from '../BestChoice/BestChoice';
import FAQs from '../FAQs/FAQs';
import Support from '../Support/Support';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import TopHeader from '../../TopHeader/TopHeader';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <section>
            <TopHeader />
            <Header />
            <Element />
            <Service />
            <WhyChooseUs />
            <OrganicViews />
            <Subscriber />
            <BestChoice />
            <FAQs />
            <Support />
            <Reviews />
            <Footer />
        </section>
    );
};

export default Home;