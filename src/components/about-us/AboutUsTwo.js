import React from 'react';
import Data from '../../data/about/about-us-two.json';
import AboutSlider from './AboutSlider';
import AboutCounter from './AboutCounter';
import TabBox from './TabBox';
import { Styles } from "./styles/aboutUsTwo";

const AboutUsTwo = () => {
    return (
        <Styles>
            <section className="aboutus-two-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="about-content">
                                <div className="sec-title">
                                    <h6>{Data.secTitle}</h6>
                                    <h3>{Data.secHeading}</h3>
                                    <p>{Data.secDesc}</p>
                                </div>
                                <div className="content-box">
                                    <h5>Web Development</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eveniet error earum distinctio.</p>
                                </div>
                                <div className="content-box">
                                    <h5>Search Engine Optimization</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eveniet error earum distinctio.</p>
                                </div>
                                <div className="profile-sign d-flex">
                                    <div className="owner-profile d-flex">
                                        <div className="owner-img">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/owner-1.jpg`} alt="" />
                                        </div>
                                        <div className="profile-text">
                                            <h5>Madilyn Polski</h5>
                                            <p>founder & Ceo</p>
                                        </div>
                                    </div>
                                    <div className="owner-sign">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/signature.png`} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-0">
                            <div className="about-slider-box">
                                <img className="pattern1" src="/assets/images/pattern.png" alt="" />
                                <img className="pattern2" src="/assets/images/pattern.png" alt="" />
                                <div className="about-slider">
                                    <AboutSlider />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <TabBox />
                        </div>

                        <div className="col-md-12">
                            <AboutCounter />
                        </div>
                    </div>
                </div>
            </section>
        </Styles>
    );
}

export default AboutUsTwo;
