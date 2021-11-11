import React from 'react';
import "./Support.css";

const Support = () => {
    return (
        <section className="container mt-5 mb-5">
            <div className="row supportBG align-items-center text-center px-4 py-4">
                <div className="col-md-6 col-sm-12 sm:w-full">
                    <h3 className="text-white">More Support?</h3>
                </div>
                <div className="col-md-6 col-sm-12 sm:w-full">
                    <button className="contactButton"><a href="mailto:sohrab.cse9@gmail.com" className="text-decoration-none contactBTN">CONTACT US</a></button>
                </div>
            </div>
        </section>
    );
};

export default Support;