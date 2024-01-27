import React from 'react';
import Header from './../../components/header/Header';
import { BreadcrumbBox } from './../../inc/Breacrumb';
import GoogleMap from './components/GoogleMap';
import ContactForm from './components/ContactForm';
import Footer from '../../components/footer/Footer';
import { Styles } from "./styles/contact";

const Contact = () => {
   return (
      <Styles>
         {/* Main Wrapper */}
         <div className="main-wrapper contact-page">

            {/* Header Area */}
            <Header />

            {/* Breadcroumb */}
            <BreadcrumbBox title="Contact" />

            {/* Contact Block Area */}
            <section className="contact-area">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="contact-block">
                           <div className="row">
                              <div className="col-md-4">
                                 <div className="block-box d-flex block1">
                                    <div className="block-icon">
                                       <i className="flaticon-location"></i>
                                    </div>
                                    <div className="block-content">
                                       <h5>Our Location</h5>
                                       <p>795 South Park Avenue, Long Island, Newyork, NY 94107.</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-4">
                                 <div className="block-box d-flex block2">
                                    <div className="block-icon">
                                       <i className="flaticon-envelope"></i>
                                    </div>
                                    <div className="block-content">
                                       <h5>Email Address</h5>
                                       <p>enquery@domain.com<br />help@yourdomain.com</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-4">
                                 <div className="block-box d-flex block3">
                                    <div className="block-icon">
                                       <i className="flaticon-phone-call"></i>
                                    </div>
                                    <div className="block-content">
                                       <h5>Phone Number</h5>
                                       <p>+1 908 875 7678<br />+1 908 875 7679</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Google Map Area */}
            <section className="google-map-area">
               {/* Google Map */}
               <GoogleMap />
               <div className="container">
                  <div className="row margin-fix">
                     <div className="padding-fix col-md-6 offset-md-6 col-sm-8 offset-sm-4">
                        <div className="contact-form">
                           <div className="sec-title">
                              <h6>Contact Us</h6>
                              <h3>If you have any question feel free to contact us.</h3>
                           </div>
                           {/* Contact Form */}
                           <ContactForm />
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

export default Contact
