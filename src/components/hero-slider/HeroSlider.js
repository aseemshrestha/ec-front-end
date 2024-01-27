import React from 'react';
import Data from '../../data/hero/hero-slider.json';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Styles } from "./styles/heroSlider";

const HeroSlider = () => {
    function Arrow(props) {
        let className = props.type === "next" ? "nextArrow las la-arrow-right" : "prevArrow las la-arrow-left";
        return (
            <i className={className} onClick={props.onClick}></i>
        );
    }

    const settings = {
        dots: false,
        arrows: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
        nextArrow: <Arrow type="next" />,
        prevArrow: <Arrow type="prev" />
    };

    return (
        <Styles>
            {/* Hero Slider */}
            <section className="hero-slider-area">
                <Slider {...settings}>
                    {
                        Data.map((data, i) => (
                            <div className="slider-item" key={i}>
                                <div className="image-container">
                                    <img src={process.env.PUBLIC_URL + data.sliderBackground} className="slider-image" alt="" />
                                </div>
                                <div className="slider-table">
                                    <div className="slider-tablecell">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="slider-box">
                                                        <div className="hero-title">
                                                            <h5>{data.title}</h5>
                                                        </div>
                                                        <div className="hero-heading">
                                                            <h1>{data.bigTitle}</h1>
                                                        </div>
                                                        <div className="hero-desc">
                                                            <p>{data.desc}</p>
                                                        </div>
                                                        <div className="hero-btns">
                                                            <Link className="link-btn btn1" to={process.env.PUBLIC_URL + data.btnLink1}>Get Started</Link>
                                                            <Link className="link-btn btn2" to={process.env.PUBLIC_URL + data.btnLink2}>About Us</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-0">
                                                    <div className="slider-item-img">
                                                        <img src={process.env.PUBLIC_URL + data.sliderImage} className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </section>
        </Styles>
    )
}

export default HeroSlider