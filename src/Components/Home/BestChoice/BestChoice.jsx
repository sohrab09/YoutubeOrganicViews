import React from 'react';
import bestChoice from "../../Image/bestChoice.png";

const BestChoice = () => {
    return (
        <section className="container mt-5 mb-5">
            <div className="row text-center px-3 py-3">
                <div className="col-md-4 col-sm-12">
                    <h3>We are the best choice</h3>
                    <p>Through YouTube Ads, we promote your video on YouTube to users searching for your keywords and to the fans of similar channels.</p>
                    <h3>We can help you!</h3>
                    <p>The viewers targeted in the promotion will naturally find your video interesting and can like, comment, and subscribe to your channel.</p>
                </div>
                <div className="col-md-4 col-sm-12">
                    <img className="img-fluid" src={bestChoice} alt="" />
                </div>
                <div className="col-md-4 col-sm-12">
                    <h3>Best Quality</h3>
                    <p>The main goal of anyone uploading videos to YouTube is to reach more people. The way to reach more people is to be listed higher.</p>
                    <h3>Payments</h3>
                    <p>We accept all kind of credit cards, also prepaid. We use the safest payment circuit currently in circulation: PayPal.</p>
                </div>
            </div>
        </section>
    );
};

export default BestChoice;