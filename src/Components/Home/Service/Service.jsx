import React from 'react';
import "./Service.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import service from "../../Image/service.png";

const Service = () => {
    return (
        <section id="T" className="mt-5 container">
            <div className="row text-center align-items-center">
                <div className="col-md-6 col-sm-12 sm:w-full">
                    <h1 className="heading">Try our services NOW!</h1>
                    <p className="subHeading">You can try our services with 1000 YouTube Views for only 4.99 <br />
                        After this test, if you are satisfied, you can choose a package with <br /> more Views.</p>
                    <FontAwesomeIcon className="text-danger icon mt-5 mb-3" icon={faHandPointRight} />
                </div>
                <div className="col-md-6 col-sm-12 sm:w-full">
                    <img className="serviceImg" src={service} alt="" style={{ height: "330px" }}/>
                </div>
            </div>
        </section>
    );
};

export default Service;