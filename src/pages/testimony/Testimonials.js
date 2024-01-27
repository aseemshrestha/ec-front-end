import React from 'react';
import Header from './../../components/header/Header';
import { BreadcrumbBox } from './../../inc/Breacrumb';
import Testimonial from './../../components/testimonial/Testimonial';
import NumberCounter from './../../components/counter/Counter';
import TeamSlider from './../../components/team/TeamSlider';
import Footer from '../../components/footer/Footer';
import { Styles } from "./styles/testimonials";

const Testimonials = () => {
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper testimonial-page">

                {/* Header Area */}
                <Header />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Testimonial" />

                {/* Testimonials */}
                <Testimonial />

                {/* Number Counter */}
                <NumberCounter />

                {/* Team Member */}
                <TeamSlider />

                {/* Footer Area */}
                <Footer />

            </div>
        </Styles>
    )
}

export default Testimonials
