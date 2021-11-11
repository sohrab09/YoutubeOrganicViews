import React from 'react';
import { useParams } from 'react-router-dom';
import "./Checkout.css";
import Coupon from './Coupon';
import MockOrganicData from '../Mock/OrganicData';
import MockOrganicSubscribers from '../Mock/OrganicSubscribers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TopHeader from '../TopHeader/TopHeader';

const Checkout = () => {

    const [services, setServices] = useState({})

    const location = useLocation();
    console.log(location.pathname);
    let { id } = useParams();
    let OrganicData = null;

    let OrganicSubscribers = null;
    useEffect(() => {
        if (location.pathname.includes('/checkout/views')) {
            OrganicData = MockOrganicData.filter(item => item.id === Number(id));
            OrganicData = OrganicData.length > 0 ? OrganicData[0] : null;
            setServices(OrganicData);
            console.log("OrganicDataFind:", OrganicData)
        }
        if (location.pathname.includes('/checkout/subscriber')) {
            OrganicSubscribers = MockOrganicSubscribers.filter(item => item.id === Number(id));
            OrganicSubscribers = OrganicSubscribers.length > 0 ? OrganicSubscribers[0] : null;
            setServices(OrganicSubscribers);
            console.log("OrganicSubscribersFind:", OrganicSubscribers)
        }
    }, [])

    return (
        <section className="container">
            <TopHeader />
            <Coupon />
            <div className="row">
                <div className="col-md-7 col-sm-12">
                    <form action="">
                        <div className="text-secondary">
                            <h5>Link</h5>
                            <input type="text" required="" className="form-control mt-2 mb-2" placeholder="Video Or Profile Link" />
                        </div>
                        <div className="text-secondary">
                            <h5>Name</h5>
                            <input type="text" required="" className="form-control mt-2 mb-2" placeholder="Video Or Profile Link" />
                        </div>
                    </form>
                </div>
                <div className="col-md-5 col-sm-12">
                    <div className="row p-3 mt-5">
                        <div className="col-md-8 col-sm-12 sm:w-100">
                            <h5>{services.name} <FontAwesomeIcon icon={faTimes} />  1</h5>
                        </div>
                        <div className="col-md-4 col-sm-12 sm:w-100">
                            <h5>${services.price}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-sm-12 sm:w-100">
                            <h5>Total</h5>
                        </div>
                        <div className="col-md-4 col-sm-12 sm:w-100">
                            <h5>${services.price}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;