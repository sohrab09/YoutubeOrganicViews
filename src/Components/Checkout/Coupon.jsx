import React from 'react';
import "./Coupon.css";
import { Accordion } from 'react-bootstrap';

const Coupon = () => {
    return (
        <section>
            <div className="text-center mt-5 coupon">
                <div className="w-50">
                    <Accordion>
                        <Accordion.Item eventKey="0" className="border-0 text-center">
                            <Accordion.Header><h5 className="text-secondary">Have a coupon? Click here to enter your code</h5></Accordion.Header>
                            <Accordion.Body>
                                <div className="form-group text-center border border-secondary">
                                    <div className="p-3">
                                        <p className="mt-2 text-secondary">If you have a coupon code, please apply it <br /> below.</p>
                                        <br />
                                        <input type="text" className="form-control mt-2 mb-2" placeholder="Enter your coupon code here" />
                                        <input type="submit" className="mt-2 btn btn-dark text-white w-100 btn-lg mb-3" value="APPLY COUPON" />
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Coupon;