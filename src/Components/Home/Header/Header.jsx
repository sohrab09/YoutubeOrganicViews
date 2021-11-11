import React from 'react';
import "./Header.css";
import header from "../../Image/header.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import Products from '../Products/Products';

const Header = () => {
    return (
        <section className="mt-5 mb-5 container">
            <div className="row align-items-center text-center">
                <div className="col-md-6 col-sm-12 sm:w-full">
                    <h1 className="head">Promote Your Video and Make it Viral</h1>
                    <p className="headParagraph">Get your videos seen by thousands of targeted people. Grow <br /> your subscribers and skyrocket your channel popularity!</p>
                    <button className="zoom-in-zoom-out"><FontAwesomeIcon className="" icon={faPlayCircle} /> <a href="#T" className="text-white text-decoration-none">PROMOTE YOUR VIDEO</a></button>
                    <Products />
                </div>
                <div className="col-md-6 col-sm-12 sm:w-full">
                    <img src={header} alt="" style={{ height: "40.75rem" }} />
                </div>
            </div>
        </section>
    );
};

export default Header;