import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../inc/Search';
import { Styles } from "./styles/mobileMenu.js";

const MobileMenu = () => {
   const [isActive, setActive] = useState(false);

   const activeClass = () => {
      setActive(!isActive);
   };

   let mobileMenuBody = (isActive ? ' visible' : '');
   let mobileMenuOverlay = (isActive ? ' active' : '');

   return (
      <Styles>
         {/* Mobile Menu */}
         <section className="mobile-menu-area">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="mb-topbar d-flex justify-content-between">
                        <div className="topbar-item">
                           <p><i className="las la-phone"></i>+1 (396) 486 4709</p>
                        </div>
                        <div className="topbar-item">
                           <ul className="list-unstyled list-inline mb-social">
                              <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                              <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                              <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                              <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-instagram"></i></a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="mb-logo-area d-flex justify-content-between">
                        <div className="mb-logo-box d-flex">
                           <div className="mb-menu-btn">
                              <button type="button" className="menu-btn" onClick={activeClass}>
                                 <i className="las la-bars"></i>
                              </button>
                           </div>
                           <div className="mb-logo">
                              <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></Link>
                           </div>
                        </div>
                        <div className="mb-search">
                           <Search />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Mobile Menu Sidebar */}
         <section className={`mb-sidebar${mobileMenuBody}`}>
            <div className="mb-sidebar-heading d-flex justify-content-between">
               <div><h5>Menu</h5></div>
               <div><button onClick={activeClass}><i className="las la-times"></i></button></div>
            </div>
            <div className="mb-sidebar-menu">
               <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           Home Style
                        </button>
                     </h2>
                     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           <ul className="list-unstyled">
                              <li><Link to={process.env.PUBLIC_URL + "/"}>Home Style 1</Link></li>
                              <li><Link to={process.env.PUBLIC_URL + "/home-two"}>Home Style 2</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           Pages
                        </button>
                     </h2>
                     <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           <ul className="list-unstyled">
                              <li><Link to={process.env.PUBLIC_URL + "/about"}>About Us</Link></li>
                              <li><Link to={process.env.PUBLIC_URL + "/team"}>Team</Link></li>
                              <li><Link to={process.env.PUBLIC_URL + "/testimonial"}>Testimonial</Link></li>
                              <li><Link to={process.env.PUBLIC_URL + "/price"}>Pricing Table</Link></li>
                              <li><Link to={process.env.PUBLIC_URL + "/login"}>Log In</Link></li>
                              <li><Link to={process.env.PUBLIC_URL + "/faq"}>Faq</Link></li>
                              <li><Link to={process.env.PUBLIC_URL + "/error"}>404 Error</Link></li>
                              <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           Service
                        </button>
                     </h2>
                     <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           <ul className="list-unstyled">
                              <li><Link to={process.env.PUBLIC_URL + "/service"}>Services</Link></li>
                              <li><Link to={process.env.PUBLIC_URL + "/service-details"}>Service Details</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                           Project
                        </button>
                     </h2>
                     <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           <ul className="list-unstyled">
                              <li><Link to={process.env.PUBLIC_URL + "/project"}>Projects</Link></li>
                              <li><Link to={process.env.PUBLIC_URL + "/project-details"}>Project Details</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="accordion-item">
                     <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                           Blog
                        </button>
                     </h2>
                     <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           <ul className="list-unstyled">
                              <li><Link to={process.env.PUBLIC_URL + "/blog"}>Blog Style</Link></li>
                              <li><Link to={process.env.PUBLIC_URL + "/blog-details"}>Blog Details</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <div className={`mb-sidebar-overlay${mobileMenuOverlay}`} onClick={activeClass}></div>
      </Styles>
   )
}

export default MobileMenu