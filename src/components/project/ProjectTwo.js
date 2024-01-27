import React from 'react';
import Data from '../../data/project/project-two.json';
import { Link } from 'react-router-dom';
import { Styles } from "./styles/projectTwo";

const ProjectTwo = () => {
    return (
        <Styles>
            <section className="project-two-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title text-center">
                                <h6><span>{Data.secTitle}</span></h6>
                                <h3>{Data.secHeading}</h3>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="project-gallery">
                                <div className="row">
                                    {
                                        Data.dataList.map((data, i) => (
                                            <div className="col-lg-3 col-sm-6" key={i}>
                                                {
                                                    data.projectData.map((prodata, i) => (
                                                        <div className="project-box" key={i}>
                                                            <img src={process.env.PUBLIC_URL + prodata.imgUrl} className="img-fluid" alt="" />
                                                            <div className="project-content">
                                                                <h6 className="pro-title"><Link to={process.env.PUBLIC_URL + prodata.proLink}>{prodata.proTitle}</Link></h6>
                                                                <span className="pro-category">{prodata.category}</span>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Styles>
    );
}

export default ProjectTwo;
