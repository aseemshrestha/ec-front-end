import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../../data/hero/hero-image.json';
import { Styles } from "./styles/heroImage";

const HeroImage = () => {
    return (
        <Styles>
            <section className="hero-image-area" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${Data.heroBackground})` }}>
                <div className="hero-table">
                    <div className="hero-tablecell">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-12">
                                    <div className="hero-box">
                                        <div className="hero-title">
                                            <h1>{Data.title}</h1>
                                        </div>
                                        <div className="hero-desc">
                                            <p>{Data.desc}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="hero-image">
                                        <img src={process.env.PUBLIC_URL + Data.heroImage} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape"></div>
            </section>
        </Styles>
    );
}

export default HeroImage;
