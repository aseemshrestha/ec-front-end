import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../../data/footer/footer.json';
import Logo from '../../data/header/logo.json';
import BackToTop from '../../inc/BackToTop';
import { Styles } from "./styles/footer.js";

const Footer = () => {
    return (
        <Styles>
            {/* Footer Area */}
            <footer className="footer" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${Data.footerBg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-top">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="logo">
                                            <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + Logo.logo} alt="" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="registration">
                                            <form action="#">
                                                <input type="text" placeholder="Enter email address" />
                                                <button type="submit">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="social text-end">
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-instagram"></i></a></li>
                                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-dribbble"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="footr-main">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="ft-about">
                                            <h5>About Us</h5>
                                            <p>Lorem ipsum dolor sit amet, consect elit adipisicing. Saepe porro neque a nam null sepone quos.</p>
                                            <ul className="list-unstyled">
                                                <li><i className="las la-map-marker"></i>795 South Park Avenue, CA 94107.</li>
                                                <li><i className="las la-envelope"></i>enquery@domain.com</li>
                                                <li><i className="las la-phone"></i>+1 908 875 7678</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="ft-link">
                                            <h5>Quick Links</h5>
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>General Info</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Help Center</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Our Services</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Privacy Policy</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Online Support</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-right"></i>Live Chat</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="ft-post">
                                            <h5>Latest News</h5>
                                            <div className="post-box d-flex">
                                                <div className="post-img">
                                                    <img src={process.env.PUBLIC_URL + "/assets/images/f-post-1.jpg"} alt="" className="img-fluid" />
                                                </div>
                                                <div className="post-content">
                                                    <span>Mar 21, 2024</span>
                                                    <Link to={process.env.PUBLIC_URL + "/blog-details"}>Asper sint sunta nobis tolo cumq provide...</Link>
                                                </div>
                                            </div>
                                            <div className="post-box d-flex">
                                                <div className="post-img">
                                                    <img src={process.env.PUBLIC_URL + "/assets/images/f-post-2.jpg"} alt="" className="img-fluid" />
                                                </div>
                                                <div className="post-content">
                                                    <span>Mar 22, 2024</span>
                                                    <Link to={process.env.PUBLIC_URL + "/blog-details"}>Animi recusandae dolor toa nullaki...</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="ft-gallery">
                                            <h5>Instagram</h5>
                                            <div className="gallery-box clearfix">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/f-post-3.jpg"} alt="" className="img-fluid" />
                                                <img src={process.env.PUBLIC_URL + "/assets/images/f-post-4.jpg"} alt="" className="img-fluid" />
                                                <img src={process.env.PUBLIC_URL + "/assets/images/f-post-5.jpg"} alt="" className="img-fluid" />
                                                <img src={process.env.PUBLIC_URL + "/assets/images/f-post-6.jpg"} alt="" className="img-fluid" />
                                                <img src={process.env.PUBLIC_URL + "/assets/images/f-post-7.jpg"} alt="" className="img-fluid" />
                                                <img src={process.env.PUBLIC_URL + "/assets/images/f-post-8.jpg"} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="copyright-area">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="copy-text">
                                            <p>Copyright &copy; 2024 | Designed With <i className="las la-heart"></i> by <a href={process.env.PUBLIC_URL + "/"} target="_blank" rel="noreferrer">SnazzyTheme</a></p>
                                        </div>
                                    </div>
                                    <div className="col-md-5 text-end">
                                        <ul className="copy-menu list-unstyled list-inline">
                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}>Terms & Condition</a>|</li>
                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}>Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Back To Top */}
                <BackToTop scrollStepInPx="10000" delayInMs="500" />
            </footer>
        </Styles >
    )
}

export default Footer