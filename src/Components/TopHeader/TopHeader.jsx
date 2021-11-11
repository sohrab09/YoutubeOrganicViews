import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../Image/logo.png';

const TopHeader = () => {
    return (
        <section className="container mt-5">
            <div className="text-center">
                <Link to="/">
                    {/* <img src={logo} alt="" style={{ width: "250px" }} /> */}
                    <h1 className="text-center">
                        Youtube Organic Views 
                    </h1>
                    <p>Promote Your Video and Make Viral Now</p>
                </Link>
            </div>
        </section>
    );
};

export default TopHeader;