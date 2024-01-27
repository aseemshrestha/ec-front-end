import React from 'react';
import Header from './components/header/Header';
import HeroImage from './components/hero-image/HeroImage';
import BlockBox from './components/block/BlockBox';
import AboutUs from './components/about-us/AboutUs';
import Service from './components/service/Service';
import Banner from './components/banner/Banner';
import Projects from './components/project/Projects';
import TeamSlider from './components/team/TeamSlider';
import Pricing from './components/pricing/Pricing';
import NumberCounter from './components/counter/Counter';
import Testimonial from './components/testimonial/Testimonial';
import HomeBlog from './components/blog/HomeBlog';
import Footer from './components/footer/Footer';

const HomeOne = () => {
    return (
        <div className="main-wrapper">

            {/* Header */}
            <Header />

            {/* Hero Image */}
            <HeroImage />

            {/* Block Area */}
            <BlockBox />

            {/* About Us Area */}
            <AboutUs />

            {/* Service Area */}
            <Service />

            {/* Banner Area */}
            <Banner />

            {/* Project Area */}
            <Projects />

            {/* Team Area */}
            <TeamSlider />

            {/* Pricing Area */}
            <Pricing />

            {/* Counter Area */}
            <NumberCounter />

            {/* Testimonial Area */}
            <Testimonial />

            {/* Home Blog Area */}
            <HomeBlog />

            {/* Footer Area */}
            <Footer />

        </div>
    )
}

export default HomeOne
