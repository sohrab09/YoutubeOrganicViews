import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <section className="bg-dark">
            <h5 className="text-center text-secondary p-3">&copy; XYZ All Rights Reserved {new Date().getFullYear()}</h5>
        </section>
    );
};

export default Footer;