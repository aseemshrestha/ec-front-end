import React from 'react';
import Data from '../../data/banner/banner.json';
import { Styles } from "./styles/banner";

const Banner = () => {
    return (
        <Styles>
            <section className="banner-area">
                <div className="banner-box">
                    <div className="banner-shape"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="banner-content">
                                    <div className="banner-title">
                                        <h6>{Data.secTitle}</h6>
                                        <h3>{Data.secHeading}</h3>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="banner-icon-box">
                                                <i className="icofont-storage"></i>
                                                <h5>Data Backup</h5>
                                                <p>Elaceat facilis voluptate suscipit nam. Vitae sededa accusai volupta.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="banner-icon-box">
                                                <i className="icofont-voip"></i>
                                                <h5>Voip Solutions</h5>
                                                <p>Elaceat facilis voluptate suscipit nam. Vitae sededa accusai volupta.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="banner-icon-box">
                                                <i className="icofont-layer"></i>
                                                <h5>IT Consulting</h5>
                                                <p>Elaceat facilis voluptate suscipit nam. Vitae sededa accusai volupta.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="banner-icon-box">
                                                <i className="icofont-network"></i>
                                                <h5>Cyber Security</h5>
                                                <p>Elaceat facilis voluptate suscipit nam. Vitae sededa accusai volupta.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-0">
                                <div className="banner-image">
                                    <div className="image-box">
                                        <img src={process.env.PUBLIC_URL + Data.bannerImage} alt="" className="img-fluid" />
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

export default Banner;
