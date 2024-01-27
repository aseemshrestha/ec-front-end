import React from 'react';
import Data from '../../data/testimonial/testimonial.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Styles } from "./styles/testimonial";

const Testimonial = () => {
    function Arrow(props) {
        let className = props.type === "next" ? "nextArrow las la-arrow-right" : "prevArrow las la-arrow-left";
        return (
            <i className={className} onClick={props.onClick}></i>
        );
    }

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        autoplay: false,
        speed: 700,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        nextArrow: <Arrow type="next" />,
        prevArrow: <Arrow type="prev" />,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <Styles>
            <section className="testimonial-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-md-10">
                            <div className="sec-title">
                                <h6>{Data.secTitle}</h6>
                                <h3>{Data.secHeading}</h3>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="testimonial-slider">
                                <Slider {...settings}>
                                    {
                                        Data.dataList.map((data, i) => (
                                            <div className="testimonial-item" key={i}>
                                                <img src={process.env.PUBLIC_URL + data.imgUrl} alt="" className="img-fluid" />
                                                <div className="content-box">
                                                    <p>{data.comment}</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5><i className="flaticon-quotes-left"></i> {data.name}</h5>
                                                        <ul className="list-unstyled list-inline">
                                                            <li className="list-inline-item"><i className="las la-star"></i></li>
                                                            <li className="list-inline-item"><i className="las la-star"></i></li>
                                                            <li className="list-inline-item"><i className="las la-star"></i></li>
                                                            <li className="list-inline-item"><i className="las la-star"></i></li>
                                                            <li className="list-inline-item"><i className="las la-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Styles>
    );
}

export default Testimonial;
