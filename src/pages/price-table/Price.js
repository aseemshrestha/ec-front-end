import React from 'react';
import Header from './../../components/header/Header';
import { BreadcrumbBox } from './../../inc/Breacrumb';
import Pricing from '../../components/pricing/Pricing';
import NumberCounter from '../../components/counter/Counter';
import TeamSlider from '../../components/team/TeamSlider';
import Footer from '../../components/footer/Footer';
import { Styles } from "./styles/price";

const PriceTable = () => {
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper pricing-page">

                {/* Header Area */}
                <Header />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Pricing Table" />

                {/* Price Table */}
                <Pricing />

                {/* Number Counter */}
                <NumberCounter />

                {/* Team Slider */}
                <TeamSlider />

                {/* Footer Area */}
                <Footer />

            </div>
        </Styles>
    )
}

export default PriceTable
