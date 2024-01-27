import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../../components/header/Header';
import { BreadcrumbBox } from './../../inc/Breacrumb';
import Footer from '../../components/footer/Footer';
import { Styles } from "./styles/error";

const Error = () => {
   return (
      <Styles>
         {/* Main Wrapper */}
         <div className="main-wrapper error-page">

            {/* Header Area */}
            <Header />

            {/* Breadcroumb */}
            <BreadcrumbBox title="404 Error" />

            {/* Error Area */}
            <section className="error-area">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="error-box text-center">
                           <img src={process.env.PUBLIC_URL + `/assets/images/404.png`} className="img-fluid" alt="" />
                           <h2>Sorry Page Not Found</h2>
                           <p>The page you are looking for can't be found. Go to homepage and search again.</p>
                           <Link to={process.env.PUBLIC_URL + "/"}>Go To Homepage</Link>
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

export default Error
