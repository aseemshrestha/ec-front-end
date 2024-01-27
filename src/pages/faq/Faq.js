import React from 'react';
import Header from './../../components/header/Header';
import { BreadcrumbBox } from './../../inc/Breacrumb';
import FaqForm from './FaqForm';
import Footer from '../../components/footer/Footer';
import { Styles } from "./styles/faq";

const Faq = () => {
   return (
      <Styles>
         {/* Main Wrapper */}
         <div className="main-wrapper faq-page">

            {/* Header Area */}
            <Header />

            {/* Breadcroumb */}
            <BreadcrumbBox title="Faq Question" />

            {/* Faq Area */}
            <section className="faq-area">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-8 col-md-7">
                        <div className="faq-box">
                           <div className="sec-title">
                              <h6>Frequently Ask Question</h6>
                              <h3>Vitae sed praesentium tempora ex fugiat animin kalem reiciendi sapuro kisomi dicta tumera sineora saepe.</h3>
                           </div>
                           <div className="faq-item">
                              <div className="accordion">
                                 <div className="accordion-item">
                                    <button className="accordion-button" id="panel1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                                       <span>Q</span> I don't know what i should write here?
                                    </button>
                                    <div id="collapseOne" className="accordion-desc accordion-collapse collapse show" aria-labelledby="panel1">
                                       <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                                    </div>
                                 </div>
                                 <div className="accordion-item">
                                    <button className="accordion-button" id="panel2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true">
                                       <span>Q</span> I don't know what i should write here?
                                    </button>
                                    <div id="collapseTwo" className="accordion-desc accordion-collapse collapse show" aria-labelledby="panel2">
                                       <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                                    </div>
                                 </div>
                                 <div className="accordion-item">
                                    <button className="accordion-button" id="panel3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true">
                                       <span>Q</span> I don't know what i should write here?
                                    </button>
                                    <div id="collapseThree" className="accordion-desc accordion-collapse collapse show" aria-labelledby="panel3">
                                       <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                                    </div>
                                 </div>
                                 <div className="accordion-item">
                                    <button className="accordion-button" id="panel4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true">
                                       <span>Q</span> I don't know what i should write here?
                                    </button>
                                    <div id="collapseFour" className="accordion-desc accordion-collapse collapse show" aria-labelledby="panel4">
                                       <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                                    </div>
                                 </div>
                                 <div className="accordion-item">
                                    <button className="accordion-button" id="panel5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true">
                                       <span>Q</span> I don't know what i should write here?
                                    </button>
                                    <div id="collapseFive" className="accordion-desc accordion-collapse collapse show" aria-labelledby="panel5">
                                       <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-4 col-md-5">
                        <div className="faq-form-box">
                           <div className="sec-title text-center">
                              <h6><span>Ask Your Question</span></h6>
                              <h4>Don't find what you are looking for, Ask us</h4>
                           </div>
                           <FaqForm />
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

export default Faq
