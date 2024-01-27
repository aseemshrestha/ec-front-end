import React from 'react';
import Header from './../../components/header/Header';
import { BreadcrumbBox } from './../../inc/Breacrumb';
import RelatedProject from './RelatedProject';
import Footer from '../../components/footer/Footer';
import { Styles } from "./styles/projectDetails";

const ProjectDetails = () => {
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper project-details-page">

                {/* Header Area */}
                <Header />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Project Details" />

                {/* Service Details */}
                <section className="project-details-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-12">
                                <div className="project-info">
                                    <ul className="list-unstyled">
                                        <li className="info-item">
                                            <i className="info-icon icofont-skillful"></i>
                                            <p>Client</p>
                                            <h5>Saleh Technology</h5>
                                        </li>
                                        <li className="info-item">
                                            <i className="info-icon icofont-category"></i>
                                            <p>Category</p>
                                            <h5>Marketing Strategy</h5>
                                        </li>
                                        <li className="info-item">
                                            <i className="info-icon icofont-location"></i>
                                            <p>Location</p>
                                            <h5>Los Angeles, USA</h5>
                                        </li>
                                        <li className="info-item">
                                            <i className="info-icon las la-calendar"></i>
                                            <p>Date</p>
                                            <h5>Feb 27, 2024</h5>
                                        </li>
                                        <li className="info-item">
                                            <i className="info-icon icofont-earth"></i>
                                            <p>Website</p>
                                            <h5>www.salehtech.com</h5>
                                        </li>
                                        <li className="info-item">
                                            <i className="info-icon icofont-link"></i>
                                            <ul className="list-unstyled list-inline social">
                                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-instagram"></i></a></li>
                                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-dribbble"></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-0">
                                <div className="project-image">
                                    <img src={process.env.PUBLIC_URL + `/assets/images/project-details.jpg`} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="project-desc">
                                    <h3>Business & Marketing Strategy</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, unde sapiente facilis totam adipisci deserunt cumque ut hic, neque iste illum vero rem maxime iure corporis esse init similique repudiandae magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam et debitis quidem velit nihil fugiat necessitatibus repellendus similique consequn. Ea nam maxime repellat iusto sunt culpa, impedit eligendi pariatur aliquid.<br /><br />Molestiae itaque exercitationem, eaque, totam quibusdam quos voluptatum impedit laborum enim sint iste in minus maiores molestias facere sit. Fugiat saepe libero magnam dolor deserunt eveniet, nostrum aspernatur. Sequi voluptatem officia aperiam praesentium consequuntur aiores similique.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="project-challenge">
                                    <h5>Project Challenge</h5>
                                    <p className="ch-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, in consequuntur! Nulla odit praesentium beatae voluptas, placeat delectus dignissimos perferendis, iure quis deleniti officia obcaecati libero labore natus veniam.</p>
                                    <ul className="list-unstyled">
                                        <li className="d-flex">
                                            <div className="box-icon">
                                                <i className="las la-arrow-right"></i>
                                            </div>
                                            <div className="icon-text">
                                                <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum libero magnam dolor deserunt eveniet.</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="box-icon">
                                                <i className="las la-arrow-right"></i>
                                            </div>
                                            <div className="icon-text">
                                                <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum libero magnam dolor deserunt eveniet.</p>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="box-icon">
                                                <i className="las la-arrow-right"></i>
                                            </div>
                                            <div className="icon-text">
                                                <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum libero magnam dolor deserunt eveniet.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="project-solution">
                                    <h5>Project Solution</h5>
                                    <p className="sol-desc">Adipisicing elit elst, in consequuntur. Nulla odit praesentium beatae voluptas, placeat delectus dignissimos perferendis, iure quis deleniti perefon salaka remino officia obcaecati solore doluin libero labore natus veniam.<br /><br /> Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum libero magnam dolor deserunt eveniet.</p>
                                    <ul className=" list-unstyled d-flex justify-content-between">
                                        <li className="pars1">
                                            <span>90%</span>
                                            <p>Marketing</p>
                                        </li>
                                        <li className="pars2">
                                            <span>83%</span>
                                            <p>Business</p>
                                        </li>
                                        <li className="pars3">
                                            <span>78%</span>
                                            <p>Finanace</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="project-comment">
                                    <h5>Project Result</h5>
                                    <p className="com-desc">Adipisicing elit elst, in consequuntur. Nulla odit praesentium beatae voluptas, placeat delectus dignissimos perferendis, iure quis deleniti perefon salaka remino officia obcaecati solore doluin libero labore natus veniam. Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum libero magnam dolor deserunt eveniet. Perferendis inventore labore obcaecati numquam suscipit eos ullam doloremque autem in neque quas explicabo facere commodi.</p>
                                    <div className="comment-box">
                                        <p>Minus nulla eveniet dolorem tempore ullam fugiat vero, velit molestias odit omnis soluta libero animi provident sint quam consequatur sequi distinctio laudant. Perferendis inventore labore obcaecati numquam suscipit eos ullam doloremque.</p>
                                        <span><i className="flaticon-quotes-right"></i> Adam Smith</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <RelatedProject />
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

export default ProjectDetails
