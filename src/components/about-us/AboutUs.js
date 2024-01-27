import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../../data/about/about-us.json';
import { Styles } from "./styles/aboutUs";

const AboutUs = () => {
    return (
        <Styles>
            <section className="aboutus-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-image-box">
                                <img src={process.env.PUBLIC_URL + Data.aboutImageOne} className="img-fluid main-img" alt="" />
                                <img src={process.env.PUBLIC_URL + Data.aboutImageTwo} className="img-fluid sm-img" alt="" />
                                <img src={process.env.PUBLIC_URL + `/assets/images/pattern.png`} className="img-fluid pattern-img" alt="" />
                                <div className="icon-box d-flex">
                                    <i className="las la-certificate"></i>
                                    <p>2000+ Projects Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="about-content">
                                <div className="sec-title">
                                    <h6>{Data.secTitle}</h6>
                                    <h3>{Data.secHeading}</h3>
                                    <p>{Data.secDesc}</p>
                                </div>
                                <div className="row">
                                    <div className="col-xl-7 col-md-12">
                                        <div className="about-icon-box">
                                            <div className="box-item d-flex">
                                                <div className="box-icon">
                                                    <i className="las la-check-circle"></i>
                                                </div>
                                                <div className="icon-text">
                                                    <p>{Data.iconTextOne}</p>
                                                </div>
                                            </div>
                                            <div className="box-item d-flex">
                                                <div className="box-icon">
                                                    <i className="las la-check-circle"></i>
                                                </div>
                                                <div className="icon-text">
                                                    <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum.</p>
                                                </div>
                                            </div>
                                            <div className="box-item d-flex">
                                                <div className="box-icon">
                                                    <i className="las la-check-circle"></i>
                                                </div>
                                                <div className="icon-text">
                                                    <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum.</p>
                                                </div>
                                            </div>
                                            <div className="box-item d-flex">
                                                <div className="box-icon">
                                                    <i className="las la-check-circle"></i>
                                                </div>
                                                <div className="icon-text">
                                                    <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-profile d-flex">
                                            <div className="readmore-btn">
                                                <Link className="link-btn" to={process.env.PUBLIC_URL + Data.btnLink}>Get Started</Link>
                                            </div>
                                            <div className="owner-profile d-flex">
                                                <div className="owner-img">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/owner-1.jpg`} alt="" />
                                                </div>
                                                <div className="profile-text">
                                                    <h5>Madilyn Polski</h5>
                                                    <p>founder & Ceo</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-0">
                                        <div className="icon-box-img">
                                            <div className="icon-box">
                                                <h5>Digital Service</h5>
                                                <p>Enim, nesciunt magni, impeditlor cum nostru kon laudantium.</p>
                                            </div>
                                            <div className="icon-box">
                                                <h5>Creative Solution</h5>
                                                <p>Enim, nesciunt magni, impeditlor cum nostru kun laudantium.</p>
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

export default AboutUs;
