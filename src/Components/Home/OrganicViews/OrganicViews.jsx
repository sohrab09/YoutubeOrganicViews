import React from 'react';
import "./OrganicViews.css";
import { Link } from 'react-router-dom';
import MockOrganicData from "../../Mock/OrganicData";

const OrganicViews = () => {

    return (
        <section className="container mt-5 mb-5">
            <h3 className="viewsHeading">ORGANIC VIEWS: Select The Growth Package</h3>
            <div className="row text-center px-2 py-2">
                {
                    MockOrganicData.map((data) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 sm:w-full p-3">
                            <img className="viewImage" src={data.image} alt="" /> <br />
                            <Link to={`/checkout/views/${data.id}`}>
                                <button className="buyButton px-3 py-3">{data.button}</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default OrganicViews;