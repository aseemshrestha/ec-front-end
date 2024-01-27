import React from 'react';
import Header from './../../components/header/Header';
import { BreadcrumbBox } from './../../inc/Breacrumb';
import Footer from '../../components/footer/Footer';
import { Styles } from "./styles/serviceDetails";

const ServiceDetails = () => {
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper service-details-page">

                {/* Header Area */}
                <Header />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Service Details" />

                {/* Service Details */}
                <section className="service-details-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <div className="service-sidebar">
                                    <div className="service-category">
                                        <h4>Categories</h4>
                                        <ul className="list-unstyled">
                                            <li className="active"><a href="/">Business Counselling</a></li>
                                            <li><a href="/">Corporate Business</a></li>
                                            <li><a href="/">Audit & Assurence</a></li>
                                            <li><a href="/">Web Design & Development</a></li>
                                            <li><a href="/">Search Engine Optimization</a></li>
                                            <li><a href="/">Graphics Design & Apply</a></li>
                                        </ul>
                                    </div>
                                    <div className="service-brochure">
                                        <h4>Our Brochure</h4>
                                        <ul className="list-unstyled">
                                            <li><button type="button" className="btn-pdf"><i className="las la-file-pdf"></i>download.pdf</button></li>
                                            <li><button type="button" className="btn-word"><i className="las la-file-word"></i>download.doc</button></li>
                                            <li><button type="button" className="btn-power"><i className="las la-file-powerpoint"></i>download.ppt</button></li>
                                        </ul>
                                    </div>
                                    <div className="service-contact">
                                        <h4>Contact Us</h4>
                                        <ul className="list-unstyled">
                                            <li><i className="las la-phone"></i>Phone Number <p>+1 908 875 7678</p></li>
                                            <li><i className="las la-envelope"></i>Email Address <p>enquery@domain.com</p></li>
                                            <li><i className="las la-map-marker"></i>Our Location <p>795 South Park Avenue, CA 94107.</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8">
                                <div className="service-details">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="service-details-image">
                                                <img src={process.env.PUBLIC_URL + `/assets/images/service_details.jpg`} className="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="service-details-heading">
                                                <h3>Vitae sed praesentium tempora ex fugiat animin kalem reiciendis sapuro kisomi dicta saepe.</h3>
                                                <p>Elaceat facilis voluptatibus suscipit nam. Vitae sed accusai voluptatem dolorem maiores perferendis quos obcaecati, Enim, nesciunt magni, nostrum laudantium veniam ad dolor mollitia aut corporis consequatur quis itaque consectetur. Cumque eos facilis amet a veniam deleniti iste cum hic, rerum unde! Aperiam aut, similique rerum molestias facere impedit epude tenetur corporis explicabo eveniet ducimus dolor ibus vitae sapiente impedit delectus minus.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="icon-boxes">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="icon-box d-flex">
                                                            <div className="box-icon">
                                                                <i className="las la-check-square"></i>
                                                            </div>
                                                            <div className="icon-text">
                                                                <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="icon-box d-flex">
                                                            <div className="box-icon">
                                                                <i className="las la-check-square"></i>
                                                            </div>
                                                            <div className="icon-text">
                                                                <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="icon-box d-flex">
                                                            <div className="box-icon">
                                                                <i className="las la-check-square"></i>
                                                            </div>
                                                            <div className="icon-text">
                                                                <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="icon-box d-flex">
                                                            <div className="box-icon">
                                                                <i className="las la-check-square"></i>
                                                            </div>
                                                            <div className="icon-text">
                                                                <p>Itaque consequatur omnis voluptatem sunt eius ipsam tenetur quod impedit dolor cum.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="service-details-desc">
                                                <h4>Fugiat animin kalem reiciendis sapuro</h4>
                                                <p>Cumque eos facilis amet a veniam deleniti iste cum hic, rerum unde! Aperiam aut, similique rerum molestias facere impedit epudiandae tenetur corporis id explicabo eveniet ducimus dolor ibus vitae sapiente impedit delectus minus, incidunt repelle recusandae iusto eveniet esse soluta quo cumque similique rerum repellat velit sunt libero voluptates tempori quos nobis, vero ad! oluptas itaque, quasi excepturi minus maiores inventore, animi tempora quas doloremque provident dignissimos tenetur quod impedit facere labore.</p>
                                                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio eligendi exercitationem accusamus facere dolor enim, omnis ipsa quidem sit fugiat quam beatae quaerat, velit sunt libero voluptates temporibus quos nobis, vero olupt itaque, quasi excepturi minus maiores inventore.</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="service-accordion">
                                                <h4>Odio eligendi exercitationem accusamus facere</h4>

                                                {/* Accordion */}
                                                <div className="accordion">
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header">
                                                            <button className="accordion-button"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#panelOne"
                                                                aria-expanded="true">
                                                                Add your desire question number 1 here?
                                                                <i className="las la-angle-up"></i>
                                                            </button>
                                                        </h5>
                                                        <div id="panelOne" className="accordion-body collapse show">
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates officiis facere error eveniet neque vel expedita cum pariatur, eius ut id nostrum, quis modi ad reiciendis repellat unde facilis. Distinctio similique deserunt porro numquam exercitationem! In repellat unde, aperiam laborum corrupti, tempore repellendus porro animi illum maiores minus.</p>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header">
                                                            <button className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse" data-bs-target="#panelTwo"
                                                                aria-expanded="false">
                                                                Add your desire question number 2 here?
                                                                <i className="las la-angle-up"></i>
                                                            </button>
                                                        </h5>
                                                        <div id="panelTwo" className="accordion-body collapse">
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates officiis facere error eveniet neque vel expedita cum pariatur, eius ut id nostrum, quis modi ad reiciendis repellat unde facilis. Distinctio similique deserunt porro numquam exercitationem! In repellat unde, aperiam laborum corrupti, tempore repellendus porro animi illum maiores minus.</p>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header">
                                                            <button className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse" data-bs-target="#panelThree" aria-expanded="false">
                                                                Add your desire question number 3 here?
                                                                <i className="las la-angle-up"></i>
                                                            </button>
                                                        </h5>
                                                        <div id="panelThree" className="accordion-body collapse">
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates officiis facere error eveniet neque vel expedita cum pariatur, eius ut id nostrum, quis modi ad reiciendis repellat unde facilis. Distinctio similique deserunt porro numquam exercitationem! In repellat unde, aperiam laborum corrupti, tempore repellendus porro animi illum maiores minus.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default ServiceDetails
