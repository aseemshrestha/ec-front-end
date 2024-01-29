import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>About Us<i className="las la-angle-down"></i></Link>
                    <ul className="dropdown list-unstyled">
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/team"}>Company Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/testimonial"}>Mission and Vision</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/price"}>Why should you choose us</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Service <i className="las la-angle-down"></i></Link>
                    <ul className="dropdown list-unstyled">
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/service"}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/service-details"}>Service Details</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Events</Link>
            
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Pages <i className="las la-angle-down"></i></Link>
                    <ul className="dropdown list-unstyled">
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/team"}>Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/testimonial"}>Testimonial</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/price"}>Pricing Table</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/login"}>Log In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/faq"}>Faq</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/error"}>404 Error</Link>
                        </li>
                    </ul>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Blog</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
