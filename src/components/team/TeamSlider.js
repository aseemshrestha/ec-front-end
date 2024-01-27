import React from 'react';
import Data from '../../data/team/team-slider.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Styles } from "./styles/teamSlider";

const TeamSlider = () => {
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
        slidesToShow: 4,
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
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
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
            <section className="team-slider-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-md-10">
                            <div className="sec-title">
                                <h6>{Data.secTitle}</h6>
                                <h3>{Data.secHeading}</h3>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="team-slider">
                                <Slider {...settings}>
                                    {
                                        Data.dataList.map((data, i) => (
                                            <div className="team-item" key={i}>
                                                <img src={process.env.PUBLIC_URL + data.imgUrl} alt="" className="img-fluid" />
                                                <div className="img-content">
                                                    <h5>{data.name}</h5>
                                                    <p>{data.title}</p>
                                                </div>
                                                <div className="social-box">
                                                    <ul className="list-unstyled text-center">
                                                        <li><a href={process.env.PUBLIC_URL + data.facebook}><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href={process.env.PUBLIC_URL + data.twitter}><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href={process.env.PUBLIC_URL + data.linkedin}><i className="fab fa-linkedin-in"></i></a></li>
                                                    </ul>
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

export default TeamSlider;
