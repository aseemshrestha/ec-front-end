import React from 'react';
import Header from './../../components/header/Header';
import { BreadcrumbBox } from './../../inc/Breacrumb';
import Footer from '../../components/footer/Footer';
import Projects from './../../components/project/Projects';
import TeamSlider from '../../components/team/TeamSlider';
import { Styles } from "./styles/project";

const Project = () => {
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper project-page">

                {/* Header Area */}
                <Header />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Our projects" />

                {/* Project Area */}
                <Projects />

                {/* Team Area */}
                <TeamSlider />

                {/* Footer Area */}
                <Footer />

            </div>
        </Styles>
    )
}

export default Project
