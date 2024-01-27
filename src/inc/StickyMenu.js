import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './../components/navigation/Navigation';
import Logo from '.././data/header/logo.json';
import { Styles } from "./styles/stickyMenu.js";

const StickyMenu = () => {

   const isMounted = useRef(true);
   const [sticky, setSticky] = useState(false);

   useEffect(() => {
      return () => {
         isMounted.current = false;
      }
   }, [])

   function setSticked() {
      if(isMounted.current === true) {
         if (window.scrollY > 160) {
            setSticky(true);
         } else {
            setSticky(false);
         }
      }
   }

   window.addEventListener("scroll", setSticked);
   let scrollClass = (sticky ? ' sticky' : '');

   return (
      <Styles>
         {/* Sticky Menu */}
         <div className={`sticky-header-area${scrollClass}`}>
            <div className="container">
               <div className="row">
                  <div className="col-md-2">
                     <div className="sticky-logo">
                        <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + Logo.logo} alt="" /></Link>
                     </div>
                  </div>
                  <div className="col-md-10">
                     <div className="sticky-navmenu nav-menu d-flex justify-content-between">
                        <Navigation />

                        <div className="getintouch-phone d-flex">
                           <div className="get-in-touch">
                              <Link to={process.env.PUBLIC_URL + "/"}>Get In Touch</Link>
                           </div>
                           <div className="menu-phone d-flex">
                              <div className="loc-icon">
                                 <i className="flaticon-phone-call"></i>
                              </div>
                              <div className="loc-text">
                                 <p>Call us anytime</p>
                                 <span>+1 (908) 875 7678</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Styles>
   )
}

export default StickyMenu