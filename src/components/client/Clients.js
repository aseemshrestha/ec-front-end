import React from 'react';
import Data from '../../data/client/client.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Styles } from "./styles/clients";

const Clients = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
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
            <section className="clients-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="clients-container">
                                <div className="clients-row">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="sec-title text-center">
                                                <h6><span>{Data.secTitle}</span></h6>
                                                <h3>{Data.secHeading}</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="client-slider">
                                                <Slider {...settings}>
                                                    {
                                                        Data.dataList.map((data, i) => (
                                                            <div className="client-item text-center" key={i}>
                                                                <img src={process.env.PUBLIC_URL + data.imgUrl} alt="" className="img-fluid" />
                                                            </div>
                                                        ))
                                                    }
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Styles>
    );
}

export default Clients;
