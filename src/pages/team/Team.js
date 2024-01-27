import React from 'react';
import Data from '../../data/team/team.json';
import Header from './../../components/header/Header';
import { BreadcrumbBox } from './../../inc/Breacrumb';
import Footer from '../../components/footer/Footer';
import { Styles } from "./styles/team";

const TeamMember = () => {
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper team-page">

                {/* Header Area */}
                <Header />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Team Member" />

                {/* Team Members */}
                <section className="team-member-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-title text-center">
                                    <h6><span>{Data.secTitle}</span></h6>
                                    <h3>{Data.secHeading}</h3>
                                </div>
                                <div className="team-members">
                                    <div className="row">
                                        {
                                            Data.dataList.map((data, i) => (
                                                <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                                                    <div className="team-item">
                                                        <img src={process.env.PUBLIC_URL + data.imgUrl} alt="" className="img-fluid" />
                                                        <div className="img-content">
                                                            <h5>{data.name}</h5>
                                                            <p>{data.title}</p>
                                                        </div>
                                                        <div className="social-box">
                                                            <ul className="list-unstyled text-center">
                                                                <li><a href={process.env.PUBLIC_URL + data.facebook}><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href={process.env.PUBLIC_URL + data.twitter}><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href={process.env.PUBLIC_URL + data.linkedin}><i className="fab fa-linkedin-in"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Area */}
                <Footer />

            </div>
        </Styles>
    )
}

export default TeamMember
