import React from 'react';
import Header from './../../components/header/Header';
import { BreadcrumbBox } from './../../inc/Breacrumb';
import Footer from '../../components/footer/Footer';
import ServiceTwo from '../../components/service/ServiceTwo';
import Clients from '../../components/client/Clients';
import TeamSlider from '../../components/team/TeamSlider';
import { Styles } from "./styles/services";

const Services = () => {
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper service-page">

                {/* Header Area */}
                <Header />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Our services" />

                {/* Service Area 2 */}
                <ServiceTwo />

                {/* Brand Area */}
                <Clients />

                {/* Team Area */}
                <TeamSlider />

                {/* Footer Area */}
                <Footer />

            </div>
        </Styles>
    )
}

export default Services
