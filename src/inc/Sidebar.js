import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Styles } from "./styles/sidebar.js";

const Sidebar = () => {
    const [isActive, setActive] = useState(false);

    const activeClass = () => {
        setActive(!isActive);
    };

    return (
        <Styles>
            {/* Sidebar */}
            <button type="button" className="nav-link nav-sidebar" onClick={activeClass}>
                <i className="las la-bars"></i>
            </button>

            <div className={isActive ? 'sidebar open' : 'sidebar'}>
                <div className="side-logo d-flex justify-content-between">
                    <div><Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></Link></div>
                    <div><button type="button" onClick={activeClass} className="close-btn"><i className="las la-times"></i></button></div>
                </div>
                <div className="side-content">
                    <h6>About Us</h6>
                    <p>Lorem ipsum dolor sit amet, consecte adipisicing elit. Mollitia modi, nostru rem sapiente. Excepturi molestiae soluta quisquam officiis iure sunt.</p>
                </div>
                <div className="side-post">
                    <h6>Recent Post</h6>
                    <div className="post-box d-flex">
                        <div className="post-img">
                            <img src={process.env.PUBLIC_URL + "/assets/images/post-01.jpg"} alt="" />
                        </div>
                        <div className="post-title">
                            <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
                            <span>March 12, 2024</span>
                        </div>
                    </div>
                    <div className="post-box d-flex">
                        <div className="post-img">
                            <img src={process.env.PUBLIC_URL + "/assets/images/post-02.jpg"} alt="" />
                        </div>
                        <div className="post-title">
                            <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
                            <span>March 12, 2024</span>
                        </div>
                    </div>
                    <div className="post-box d-flex">
                        <div className="post-img">
                            <img src={process.env.PUBLIC_URL + "/assets/images/post-03.jpg"} alt="" />
                        </div>
                        <div className="post-title">
                            <p>Lorem ipsum dolor sit amet, consecte adipisicing elit.</p>
                            <span>March 12, 2024</span>
                        </div>
                    </div>
                </div>
                <div className="side-gallery">
                    <h6>Gallery</h6>
                    <img src={process.env.PUBLIC_URL + "/assets/images/gallery-01.jpg"} alt="" />
                    <img src={process.env.PUBLIC_URL + "/assets/images/gallery-02.jpg"} alt="" />
                    <img src={process.env.PUBLIC_URL + "/assets/images/gallery-03.jpg"} alt="" />
                    <img src={process.env.PUBLIC_URL + "/assets/images/gallery-04.jpg"} alt="" />
                    <img src={process.env.PUBLIC_URL + "/assets/images/gallery-05.jpg"} alt="" />
                    <img src={process.env.PUBLIC_URL + "/assets/images/gallery-06.jpg"} alt="" />
                </div>
                <div className="side-contact">
                    <h6>Contact Us</h6>
                    <ul className="list-unstyled">
                        <li><i className="las la-map-marker"></i>795 South Park Avenue, New York, NY USA 94107</li>
                        <li><i className="las la-phone"></i>+1 (396) 486 4709</li>
                        <li><i className="las la-envelope"></i>enquery@afily.com</li>
                    </ul>
                </div>
                <div className="side-social">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-google"></i></a></li>
                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className={isActive ? 'sidebar-overlay visible' : 'sidebar-overlay'} onClick={activeClass}></div>
        </Styles>
    )
}

export default Sidebar