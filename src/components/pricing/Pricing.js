import React from 'react';
import Data from '../../data/pricing/pricing.json';
import { Styles } from "./styles/pricing";

const Pricing = () => {
    return (
        <Styles>
            <section className="pricing-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title text-center">
                                <h6>{Data.secTitle}</h6>
                                <h3>{Data.secHeading}</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="pricing-box box1">
                                <div className="pricing-top text-center">
                                    <h4>Starter Plan</h4>
                                    <div className="price-amount">
                                        <span>$29</span>
                                    </div>
                                    <p>Eum aperiam fugit illo velit nemo nobis quam</p>
                                </div>
                                <div className="pricing-list">
                                    <ul className="list-unstyled">
                                        <li><i className="las la-check-circle"></i> Adipisci velit blandi quos.</li>
                                        <li><i className="las la-check-circle"></i> Itaque facere sintis veritatis.</li>
                                        <li><i className="las la-check-circle"></i> ducimus odit pudiand.</li>
                                        <li><i className="las la-check-circle"></i> Optio on adipisci voluptates.</li>
                                    </ul>
                                    <div className="buy-button text-center">
                                        <button type="button" className="buybtn">Purchase Plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="pricing-box box2">
                                <div className="pricing-top text-center">
                                    <h4>Economy Plan</h4>
                                    <div className="price-amount">
                                        <span>$39</span>
                                    </div>
                                    <p>Eum aperiam fugit illo velit nemo nobis quam</p>
                                </div>
                                <div className="pricing-list">
                                    <ul className="list-unstyled">
                                        <li><i className="las la-check-circle"></i> Adipisci velit blandi quos.</li>
                                        <li><i className="las la-check-circle"></i> Itaque facere sintis veritatis.</li>
                                        <li><i className="las la-check-circle"></i> ducimus odit pudiand.</li>
                                        <li><i className="las la-check-circle"></i> Optio on adipisci voluptates.</li>
                                    </ul>
                                    <div className="buy-button text-center">
                                        <button type="button" className="buybtn">Purchase Plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="pricing-box box3">
                                <div className="pricing-top text-center">
                                    <h4>Professional Plan</h4>
                                    <div className="price-amount">
                                        <span>$69</span>
                                    </div>
                                    <p>Eum aperiam fugit illo velit nemo nobis quam</p>
                                </div>
                                <div className="pricing-list">
                                    <ul className="list-unstyled">
                                        <li><i className="las la-check-circle"></i> Adipisci velit blandi quos.</li>
                                        <li><i className="las la-check-circle"></i> Itaque facere sintis veritatis.</li>
                                        <li><i className="las la-check-circle"></i> ducimus odit pudiand.</li>
                                        <li><i className="las la-check-circle"></i> Optio on adipisci voluptates.</li>
                                    </ul>
                                    <div className="buy-button text-center">
                                        <button type="button" className="buybtn">Purchase Plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="pricing-box box4">
                                <div className="pricing-top text-center">
                                    <h4>Enterprise Plan</h4>
                                    <div className="price-amount">
                                        <span>$99</span>
                                    </div>
                                    <p>Eum aperiam fugit illo velit nemo nobis quam</p>
                                </div>
                                <div className="pricing-list">
                                    <ul className="list-unstyled">
                                        <li><i className="las la-check-circle"></i> Adipisci velit blandi quos.</li>
                                        <li><i className="las la-check-circle"></i> Itaque facere sintis veritatis.</li>
                                        <li><i className="las la-check-circle"></i> ducimus odit pudiand.</li>
                                        <li><i className="las la-check-circle"></i> Optio on adipisci voluptates.</li>
                                    </ul>
                                    <div className="buy-button text-center">
                                        <button type="button" className="buybtn">Purchase Plan</button>
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

export default Pricing;
