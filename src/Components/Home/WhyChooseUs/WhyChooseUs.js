import React from 'react';
import "./WhyChooseUs.css";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const WhyChooseUs = () => {

    return (
        <section className="container mt-5 mb-5">
            <div className="chooseBG row text-center align-items-center">
                <div className="col-md-4 col-sm-12 sm:w-full px-4 py-4">
                    <h2>Why Choose Us?</h2>
                </div>
                <div className="col-md-4 col-sm-12 sm:w-full px-4 py-4">
                    <VisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                            <h1 style={{ height: 50 }}>
                                {isVisible ?
                                    <CountUp
                                        start={0}
                                        end={99.99}
                                        duration={2.00}
                                        separator=" "
                                        decimals={2}
                                        decimal=","
                                        preserveValue={true}
                                        redraw={true}
                                        useEasing={true}
                                    /> : null}%
                            </h1>
                        )}
                    </VisibilitySensor>
                    <h3>Happy Customers</h3>
                </div>
                <div className="col-md-4 col-sm-12 sm:w-full px-4 py-4">
                    <VisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                            <h1 style={{ height: 50 }}>
                                {isVisible ?
                                    <CountUp
                                        start={0}
                                        end={25.748}
                                        duration={2.00}
                                        separator=" "
                                        decimals={3}
                                        decimal=","
                                        preserveValue={true}
                                        redraw={true}
                                        useEasing={true}
                                    /> : null}+
                            </h1>
                        )}
                    </VisibilitySensor>
                    <h3>Views Sold</h3>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;