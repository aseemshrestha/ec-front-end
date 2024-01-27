import React from 'react';
import Logo from '../../data/header/logo.json';
import { Link } from 'react-router-dom';
import Navigation from './../navigation/Navigation';
import Search from '../../inc/Search';
import Sidebar from './../../inc/Sidebar';
import StickyMenu from '../../inc/StickyMenu';
import MobileMenu from '../../inc/MobileMenu';
import { Styles } from "./styles/headerTwo";

const HeaderTwo = () => {
    return (
        <Styles>
            {/* Logo Area 2 */}
            <div className="header-two-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header-table">
                                <div className="header-tablecell">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="logo">
                                                <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + Logo.logo} alt="" /></Link>
                                            </div>
                                        </div>

                                        <div className="col-xl-7 col-lg-9 col-md-10">
                                            {/* Navigation */}
                                            <Navigation />
                                        </div>

                                        <div className="col-xl-3 col-lg-1 col-md-0">
                                            <div className="phone-search-box d-flex justify-content-end">
                                                <div className="menu-phone d-flex">
                                                    <div className="loc-icon">
                                                        <i className="flaticon-phone-call"></i>
                                                    </div>
                                                    <div className="loc-text">
                                                        <p>Call us anytime</p>
                                                        <span>+1 (908) 875 7678</span>
                                                    </div>
                                                </div>

                                                <div className="search-box">
                                                    <Search />
                                                </div>
                                                <div className="side-box">
                                                    <Sidebar />
                                                </div>
                                            </div>
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
    )
}

export default HeaderTwo