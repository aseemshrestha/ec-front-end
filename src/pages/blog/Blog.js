import React from 'react';
import Data from '../../data/blog/blog.json';
import { Link } from 'react-router-dom';
import Header from './../../components/header/Header';
import { BreadcrumbBox } from './../../inc/Breacrumb';
import Pagination from './components/Pagination';
import Footer from '../../components/footer/Footer';
import { Styles } from "./styles/blog";

const Blog = () => {
   return (
      <Styles>
         {/* Main Wrapper */}
         <div className="main-wrapper blog-page">

            {/* Header Area */}
            <Header />

            {/* Breadcroumb */}
            <BreadcrumbBox title="Blog" />

            {/* Blog Area */}
            <section className="blog-area">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="blog-large">
                           <div className="row">
                              <div className="col-md-6">
                                 <div className="blog-img">
                                    <img src={process.env.PUBLIC_URL + Data.blogLarge.imgUrl} alt="" className="img-fluid" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="blog-content">
                                    <h2><Link className="link-btn" to={process.env.PUBLIC_URL + Data.blogLarge.link}>{Data.blogLarge.title}</Link></h2>
                                    <p>{Data.blogLarge.desc}</p>
                                    <div className="author-date d-flex">
                                       <div className="blog-author d-flex">
                                          <img src={process.env.PUBLIC_URL + Data.blogLarge.authorThumb} alt="" /><Link to={process.env.PUBLIC_URL + Data.blogLarge.link}>{Data.blogLarge.author}</Link>
                                       </div>
                                       <div className="blog-date">
                                          <span><i className="las la-calendar"></i> {Data.blogLarge.date}</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {
                        Data.blog.map((data, i) => (
                           <div className="col-md-4" key={i}>
                              <div className="blog-item">
                                 <div className="blog-image">
                                    <img src={process.env.PUBLIC_URL + data.imgUrl} className="img-fluid" alt="" />
                                    <div className="date-box">
                                       <span><strong>{data.date}</strong> {data.month}</span>
                                    </div>
                                 </div>
                                 <div className="blog-text">
                                    <h4><Link to={process.env.PUBLIC_URL + data.link}>{data.title}</Link></h4>
                                    <div className="blog-author d-flex">
                                       <img src={process.env.PUBLIC_URL + data.authorThumb} alt="" /><Link to={process.env.PUBLIC_URL + data.link}>Sheyna Daniel</Link>
                                    </div>
                                    <Link className="btn-readmore" to={process.env.PUBLIC_URL + data.link}>Read More<i className="las la-angle-double-right"></i></Link>
                                 </div>
                              </div>
                           </div>
                        ))
                     }

                     <div className="col-md-12">
                        <Pagination />
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

export default Blog
