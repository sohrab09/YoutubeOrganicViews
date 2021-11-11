import React, { Component } from "react";
import Slider from "react-slick";
import review1 from "../../Image/review1.png"
import review2 from "../../Image/review2.png"
import review3 from "../../Image/review3.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.css";

class Reviews extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
        };

        const reviews = [
            {
                original: review1,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque pariatur ex perspiciatis unde veritatis deserunt error labore repudiandae tempora?',
                name: 'John Doe',
                position: 'CEO, Company'
            },
            {
                original: review2,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque pariatur ex perspiciatis unde veritatis deserunt error labore repudiandae tempora?',
                name: 'John Doe',
                position: 'CEO, Company'
            },
            {
                original: review3,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque pariatur ex perspiciatis unde veritatis deserunt error labore repudiandae tempora?',
                name: 'John Doe',
                position: 'CEO, Company'
            },
        ];

        return (
            <section className="container mt-5 mb-5">
                <div className="text-center">
                    <h1 className="text-danger fw-bold">Customers Reviews</h1>
                    <small>What do our customers think about Open Plays?</small>
                </div>
                <div className="text-center mt-5">
                    <Slider {...settings}>
                        {reviews.map((review, index) => (
                            <div className="text-center p-5" key={index}>
                                <div>
                                    <img src={review.original} alt="review" style={{ marginLeft: "auto", marginRight: "auto", display: "block" }} />
                                </div>
                                <div>
                                    <p>{review.description}</p>
                                    <div>
                                        <h4>{review.name}</h4>
                                        <p>{review.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Reviews;