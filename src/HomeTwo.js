import React from 'react';
import HeaderTwo from './components/header/HeaderTwo';
import HeroSlider from './components/hero-slider/HeroSlider';
import BlockBoxTwo from './components/block/BlockBoxTwo';
import AboutUsTwo from './components/about-us/AboutUsTwo';
import ServiceTwo from './components/service/ServiceTwo';
import WhyUs from './components/why-us/WhyUs';
import ProjectTwo from './components/project/ProjectTwo';
import Clients from './components/client/Clients';
import Testimonial from './components/testimonial/Testimonial';
import HomeBlog from './components/blog/HomeBlog';
import Footer from './components/footer/Footer';

const HomeTwo = () => {
    return (
        <div className="main-wrapper2">

            {/* Header 2 */}
            <HeaderTwo />

            {/* Hero Slider */}
            <HeroSlider />

            {/* Block Area 2 */}
            <BlockBoxTwo />

            {/* About Us 2 */}
            <AboutUsTwo />

            {/* Service Area 2 */}
            <ServiceTwo />

            {/* Why Us Area */}
            <WhyUs />

            {/* Project 2 Area */}
            <ProjectTwo />

            {/* Brand Area */}
            <Clients />

            {/* Testimonial Area */}
            <Testimonial />

            {/* Home Blog Area */}
            <HomeBlog />

            {/* Footer Area */}
            <Footer />

        </div>
    )
}

export default HomeTwo
