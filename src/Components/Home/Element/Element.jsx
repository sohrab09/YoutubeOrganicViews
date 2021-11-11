import React from 'react';
import "./Element.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';

const Element = () => {
    return (
        <section className="container mt-5 mb-5">
            <div className="row text-center">
                <div className="col-lg-4 col-md-4 col-sm-12 sm:w-full">
                    <FontAwesomeIcon className="text-danger fs-1 mb-3" icon={faYoutube} />
                    <h3 className="elementFont mb-3">The Best Choice</h3>
                    <p className="elementParagraph">We have plans for the starting artist, <br /> the content creator, big agencies, and <br /> everything in between.</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 sm:w-full">
                <FontAwesomeIcon className="text-danger fs-1 mb-3" icon={faVideo} />
                    <h3 className="elementFont mb-3">Services for Artists</h3>
                    <p className="elementParagraph">We only run real campaigns on Google <br /> Ads and Youtube to attract real people, <br /> so you are always able to monetize <br /> your Youtube channel.</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 sm:w-full">
                <FontAwesomeIcon className="text-danger fs-1 mb-3" icon={faGem} />
                    <h3 className="elementFont mb-3">Organic Services</h3>
                    <p className="elementParagraph">Country, interest & keyword targeting.<br /> We'll get your video seen by your <br /> target audience.</p>
                </div>
            </div>
        </section>
    );
};

export default Element;