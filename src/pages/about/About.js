import React from 'react';
import Header from './../../components/header/Header';
import { BreadcrumbBox } from './../../inc/Breacrumb';
import AboutUs from './../../components/about-us/AboutUs';
import ServiceTwo from '../../components/service/ServiceTwo';
import WhyUs from '../../components/why-us/WhyUs';
import TeamSlider from '../../components/team/TeamSlider';
import HomeBlog from '../../components/blog/HomeBlog';
import Footer from '../../components/footer/Footer';
import { Styles } from "./styles/about";

const About = () => {
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper about-page">

                {/* Header Area */}
                <Header />

                {/* Breadcroumb */}
                <BreadcrumbBox title="About us" />

                {/* About Us */}
                <AboutUs />

                {/* Service Area 2 */}
                <ServiceTwo />

                {/* Why Us Area */}
                <WhyUs />

                {/* Team Area */}
                <TeamSlider />

                {/* Home Blog Area */}
                <HomeBlog />

                {/* Footer Area */}
                <Footer />

            </div>
        </Styles>
    )
}

export default About
