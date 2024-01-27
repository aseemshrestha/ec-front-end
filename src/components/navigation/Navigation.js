import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home <i className="las la-angle-down"></i></Link>
                    <ul className="dropdown list-unstyled">
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home Style 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/home-two"}>Home Style 2</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>About</Link>
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
                    <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Projects <i className="las la-angle-down"></i></Link>
                    <ul className="dropdown list-unstyled">
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/project"}>Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/project-details"}>Project Details</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
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
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/register"}>Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/faq"}>Faq</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/error"}>404 Error</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Blog <i className="las la-angle-down"></i></Link>
                    <ul className="dropdown list-unstyled">
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/blog"}>Blog Style</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-details"}>Blog Details</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
