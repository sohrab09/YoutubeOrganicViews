import React from 'react';
import "./Subscriber.css";
import { Link } from 'react-router-dom';
import MockOrganicSubscribers from "../../Mock/OrganicSubscribers";

const Subscriber = () => {

    return (
        <section className="container mt-5 mb-5">
            <h3 className="subsHeading">CHANNEL SUBSCRIBERS: Select The Growth Package</h3>
            <div className="row text-center px-2 py-2">
                {
                    MockOrganicSubscribers.map((data) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 sm:w-full p-3">
                            <img className="subImage" src={data.image} alt="" /> <br />
                            <Link to={`/checkout/subscriber/${data.id}`}>
                                <button className="subButton px-3 py-3">{data.button}</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Subscriber;