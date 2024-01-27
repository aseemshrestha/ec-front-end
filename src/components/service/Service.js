import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../../data/service/service.json';
import { Styles } from "./styles/service";

const Service = () => {
    return (
        <Styles>
            <section className="service-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title text-center">
                                <h6><span>{Data.secTitle}</span></h6>
                                <h3>{Data.secHeading}</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box service1">
                                <div className="title-box d-flex justify-content-between">
                                    <i className="icofont-manage"></i>
                                    <h4>Manage IT Service</h4>
                                </div>
                                <p>Elaceat facilis voluptate suscipit nam. Vitae sed accusai voluptatem dolorem maiores nuri perferend corporis consequ.</p>
                                <Link className="link-btn" to={process.env.PUBLIC_URL + "/"}>Read More</Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box service2">
                                <div className="title-box d-flex justify-content-between">
                                    <i className="icofont-cloud"></i>
                                    <h4>Busines Cloud Service</h4>
                                </div>
                                <p>Elaceat facilis voluptate suscipit nam. Vitae sed accusai voluptatem dolorem maiores nuri perferend corporis consequ.</p>
                                <Link className="link-btn" to={process.env.PUBLIC_URL + "/"}>Read More</Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box service3">
                                <div className="title-box d-flex justify-content-between">
                                    <i className="icofont-compliance"></i>
                                    <h4>IT Complian Service</h4>
                                </div>
                                <p>Elaceat facilis voluptate suscipit nam. Vitae sed accusai voluptatem dolorem maiores nuri perferend corporis consequ.</p>
                                <Link className="link-btn" to={process.env.PUBLIC_URL + "/"}>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Styles>
    );
}

export default Service;
