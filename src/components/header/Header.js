import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./../navigation/Navigation";
import Logo from "../../data/header/logo.json";
import StickyMenu from "../../inc/StickyMenu";
import MobileMenu from "../../inc/MobileMenu";
import { Styles } from "./styles/header";
import { useHistory } from "react-router-dom";

export default function Header() {
  var signIn;
  let history = useHistory();
  const logOut = () => {
    window.localStorage.removeItem("access-token");
    window.localStorage.removeItem("refresh-token");
    window.localStorage.removeItem("token");
    history.push("/");
  };

  if (!localStorage.getItem("access-token") && !localStorage.getItem("token")) {
    signIn = (
      <li className="list-inline-item">
        <a href={process.env.PUBLIC_URL + "/logmein"}>Sign in</a>
      </li>
    );
    var getInTouch = (
      <div className="get-in-touch">
        <Link to={process.env.PUBLIC_URL + "/"}>Get In Touch</Link>
      </div>
    );
  } else {
    signIn = (
      <li className="list-inline-item">
          <Link to="" onClickCapture={logOut}>Sign out</Link>

      </li>
    );
  }
  return (
    <Styles>
      {/* Topbar */}
      <section className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="bar-left">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <i className="las la-map-marker"></i>Kathmandu, Nepal
                  </li>
                  <li className="list-inline-item">
                    <i className="las la-envelope"></i> support@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bar-right d-flex justify-content-end">
                <ul className="list-unstyled list-inline bar-menu">{signIn}</ul>
                <ul className="list-unstyled list-inline bar-social">
                  <li className="list-inline-item">
                    <a href={process.env.PUBLIC_URL + "/"}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={process.env.PUBLIC_URL + "/"}>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={process.env.PUBLIC_URL + "/"}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={process.env.PUBLIC_URL + "/"}>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Area */}
      <div className="logo-area">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="logo">
                <Link
                  className="navbar-brand"
                  to={process.env.PUBLIC_URL + "/"}
                >
                  <img src={process.env.PUBLIC_URL + Logo.logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-md-10">
              <div className="nav-menu d-flex justify-content-between">
                <Navigation />

                <div className="getintouch-phone d-flex">
                  {getInTouch}
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

      {/* Sticky Menu */}
      <StickyMenu />

      {/* Mobile Menu */}
      <MobileMenu />
    </Styles>
  );
}
