import React from 'react';
import Data from '../../data/service/service.json';
import { Styles } from "./styles/serviceTwo";

const ServiceTwo = () => {
    return (
        <Styles>
            <section className="service-two-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title text-center">
                                <h6><span>{Data.secTitle}</span></h6>
                                <h3>{Data.secHeading}</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-boxes service-left-box">
                                <div className="service-box d-flex flex-row-reverse">
                                    <div className="service-icon">
                                        <i className="icofont-manage icon1"></i>
                                    </div>
                                    <div className="service-content text-end">
                                        <h5>Manage IT Service</h5>
                                        <p>Lorem ipsum dolor sit ame consecte adipisic aliquam alias.</p>
                                    </div>
                                </div>
                                <div className="service-box d-flex flex-row-reverse">
                                    <div className="service-icon">
                                        <i className="icofont-cloud icon2"></i>
                                    </div>
                                    <div className="service-content text-end">
                                        <h5>Business Cloud</h5>
                                        <p>Lorem ipsum dolor sit ame consecte adipisic aliquam alias.</p>
                                    </div>
                                </div>
                                <div className="service-box d-flex flex-row-reverse">
                                    <div className="service-icon">
                                        <i className="icofont-compliance icon3"></i>
                                    </div>
                                    <div className="service-content text-end">
                                        <h5>IT Complition</h5>
                                        <p>Lorem ipsum dolor sit ame consecte adipisic aliquam alias.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-0">
                            <div className="service-two-image">
                                <img src={process.env.PUBLIC_URL + `/assets/images/service2.png`} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-boxes service-right-box">
                                <div className="service-box d-flex">
                                    <div className="service-icon">
                                        <i className="icofont-storage icon4"></i>
                                    </div>
                                    <div className="service-content">
                                        <h5>Data Backup</h5>
                                        <p>Lorem ipsum dolor sit ame consecte adipisic aliquam alias.</p>
                                    </div>
                                </div>
                                <div className="service-box d-flex">
                                    <div className="service-icon">
                                        <i className="icofont-voip icon5"></i>
                                    </div>
                                    <div className="service-content">
                                        <h5>Voip Solution</h5>
                                        <p>Lorem ipsum dolor sit ame consecte adipisic aliquam alias.</p>
                                    </div>
                                </div>
                                <div className="service-box d-flex">
                                    <div className="service-icon">
                                        <i className="icofont-network icon6"></i>
                                    </div>
                                    <div className="service-content">
                                        <h5>Cyber Security</h5>
                                        <p>Lorem ipsum dolor sit ame consecte adipisic aliquam alias.</p>
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

export default ServiceTwo;
