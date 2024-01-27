import React from 'react';
import Data from '../../data/whyus/why-us.json';
import { Styles } from "./styles/whyUs";
import PopupVideo from '../hero-image/PopupVideo';

const WhyUs = () => {

    return (
        <Styles>
            <section className="why-us-area" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${Data.whyUsBg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="sec-title">
                                <h6><span>{Data.secTitle}</span></h6>
                                <h3>{Data.secHeading}</h3>
                            </div>
                            <div className="why-us-box">
                                <p className="desc">{Data.secDesc}</p>
                                <div className="icon-boxes">
                                    <div className="icon-box d-flex">
                                        <div className="box-icon">
                                            <i className="flaticon-layers"></i>
                                        </div>
                                        <div className="box-content">
                                            <h5>Experienced</h5>
                                            <p>Natus fugit asperiores saepe voluptate veritatis quam error non voluptatum neque consequuntur.</p>
                                        </div>
                                    </div>
                                    <div className="icon-box d-flex">
                                        <div className="box-icon">
                                            <i className="flaticon-satisfied"></i>
                                        </div>
                                        <div className="box-content">
                                            <h5>Successfull</h5>
                                            <p>Natus fugit asperiores saepe voluptate veritatis quam error non voluptatum neque consequuntur.</p>
                                        </div>
                                    </div>
                                    <div className="icon-box d-flex">
                                        <div className="box-icon">
                                            <i className="flaticon-customers"></i>
                                        </div>
                                        <div className="box-content">
                                            <h5>Professionalism</h5>
                                            <p>Natus fugit asperiores saepe voluptate veritatis quam error non voluptatum neque consequuntur.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-0">
                            <div className="video-box">
                                <img src={process.env.PUBLIC_URL + Data.videoBackground} className="img-fluid" alt="" />
                                
                                {/* Popup Video */}
                                <PopupVideo />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Styles>
    );
}

export default WhyUs;
