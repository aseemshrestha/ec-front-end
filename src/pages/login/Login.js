import React from 'react';
import Header from './../../components/header/Header';
import LoginForm from './LoginForm';
import Footer from '../../components/footer/Footer';
import { Styles } from "./styles/login";

const Login = () => {
   return (
      <Styles>
         {/* Main Wrapper */}
         <div className="main-wrapper login-page">

            {/* Header Area */}
            <Header />

            {/* Login Area */}
            <section className="login-area">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-lg-5 col-md-7">
                        <div className="login-box">
                           <div className="sec-title text-center">
                              <h4><span>Log In</span></h4>
                           </div>
                           <LoginForm />
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

export default Login
