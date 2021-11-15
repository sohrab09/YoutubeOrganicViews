import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Image/logo.png';

const TopHeader = () => {
    return (
        <section className="container">
            <div className="text-center">
                <Link to="/">
                    <img src={logo} alt="logo" style={{ width: "350px" }} />
                </Link>
            </div>
        </section>
    );
};

export default TopHeader;