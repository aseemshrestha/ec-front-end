import React from 'react';
import Header from './../../../components/header/Header';
import UniversityRegistrationForm from './UniversityRegistrationForm';
import Footer from '../../../components/footer/Footer';
import { Styles } from './styles/registration';

const UniversityRegistration = () => {
   return (
      <Styles>
         {/* Main Wrapper */}
         <div className="main-wrapper registration-page">

            {/* Header Area */}
            <Header />

            {/* Registration Area */}
            <section className="registration-area">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xl-5 col-md-8">
                        <div className="registration-box">
                           <div className="sec-title text-center">
                              <h4><span>Add New University</span></h4>
                           </div>
                           <UniversityRegistrationForm  />
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

export default UniversityRegistration
