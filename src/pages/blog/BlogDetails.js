import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../../components/header/Header';
import { BreadcrumbBox } from './../../inc/Breacrumb';
import Footer from '../../components/footer/Footer';
import { Styles } from "./styles/blogDetails";
import CommentForm from './components/CommentForm';
import BlogSidebar from './BlogSidebar';

const BlogDetails = () => {
   return (
      <Styles>
         {/* Main Wrapper */}
         <div className="main-wrapper blog-details-page">

            {/* Header Area */}
            <Header />

            {/* Breadcroumb */}
            <BreadcrumbBox title="Blog Details" />

            {/* Blog Details Area */}
            <section className="blog-details-area">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-9 col-md-8">
                        <div className="blog-details-top">
                           <img src={process.env.PUBLIC_URL + `/assets/images/blog-details.jpg`} alt="" className="blog-details-img img-fluid" />
                           <div className="blog-auth-date d-flex">
                              <div className="blog-auth d-flex">
                                 <img src={process.env.PUBLIC_URL + `/assets/images/owner-1.jpg`} alt="" /><Link to={process.env.PUBLIC_URL + "/"}>Sheyna Daniel</Link>
                              </div>
                              <div className="blog-date">
                                 <span><i className="las la-calendar"></i> July 21, 2024</span>
                              </div>
                              <div className="blog-tag">
                                 <span><i className="las la-bookmark"></i> Business</span>
                              </div>
                              <div className="blog-comment">
                                 <span><i className="las la-comment"></i> (23)</span>
                              </div>
                           </div>
                        </div>
                        <div className="blog-heading">
                           <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt nemo maiores magni, tempora iste architecto</h4>
                        </div>
                        <div className="blog-desc">
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia nisi modi iusto, eligendi ducimus. Eveniet amet explicabo nesciunt quia quis perspiciatis praesentium incidunt accusamus enim id volupta, architecto sit. Fuga non provident enim sint iure unde fugit illum! Obcaecati nam sequi, nisi ut dicta corrupti debitis possimus eum. Eveniet amet explicabo nesciunt quia quis tot perspiciatis praesentium incidunt accusamus enim id volupta, architecto sit.<br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi repellendus atque aperiam, perspiciatis officia nemo esse, fuga est deleniti perferendis, doloribus odio maxime dignissimos suscipit dolore corporis repudiandae asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="quote-box d-flex">
                           <div className="quote-icon">
                              <i className="flaticon-quotes-left"></i>
                           </div>
                           <div className="quote-text">
                              <p>Modi dolores ad esse distinctio corporis sapiente obcaecati eveniet amet explicabo nesciunt quia quis perspiciatis praesentium incidunt accusamus enim id volupta dolore.</p>
                           </div>
                        </div>
                        <div className="blog-desc">
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia nisi modi iusto, eligendi ducimus. Eveniet amet explicabo nesciunt quia quis perspiciatis praesentium incidunt accusamus enim id volupta, architecto sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non provident enim sint iure unde fugit illum! Obcaecati nam sequi, nisi ut dicta corrupti debitis possimus eum.</p>
                        </div>
                        <div className="ico-overview">
                           <div className="row">
                              <div className="col-lg-5 col-md-0">
                                 <div className="ico-img">
                                    <img src={process.env.PUBLIC_URL + `/assets/images/blog-details-sm.jpg`} alt="" className="img-fluid" />
                                 </div>
                              </div>
                              <div className="col-lg-7 col-md-12">
                                 <div className="ico-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam alias eius doloribus, itaque blanditiis tenetur velit sokam magni commodi adipisci reiciendis do recusandae dishek mera ratione onim eaque.</p>
                                    <span>Perferendi amet accusamus ratione solim calasu kasm key maxime quaerat.</span>
                                    <ul className="icon-box list-unstyled">
                                       <li>
                                          <i className="las la-check-circle"></i>Lorem, ipsum dolor sit amet onsectetur adipisicing consect minixe dimare tana.
                                       </li>
                                       <li>
                                          <i className="las la-check-circle"></i>Obcaecati makam  labore nihil kisim maxime lopu namkinse vitae tempora.
                                       </li>
                                       <li>
                                          <i className="las la-check-circle"></i>Quidem totam quas rerum cupiditate culpa consec nostrm sapan iksim ipsa soqu.
                                       </li>
                                       <li>
                                          <i className="las la-check-circle"></i>Rerum cupiditate culpa consec nostrm sapan iksim ipsa jwosjo hed solur soqu.
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="blog-tag_share d-flex justify-content-between">
                           <div className="blog-tag">
                              <ul className="tags list-unstyled list-inline">
                                 <li className="list-inline-item">Tags:</li>
                                 <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/"}>Html</Link></li>
                                 <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/"}>Design</Link></li>
                                 <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/"}>Develop</Link></li>
                                 <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/"}>React</Link></li>
                              </ul>
                           </div>
                           <div className="blog-share">
                              <ul className="social list-unstyled list-inline">
                                 <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                 <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                 <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                 <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-instagram"></i></a></li>
                              </ul>
                           </div>
                        </div>

                        <div className="blog-comments">
                           <h5>Comments (03)</h5>
                           <div className="comment-box d-flex">
                              <div className="comment-image">
                                 <img src={process.env.PUBLIC_URL + `/assets/images/comment-1.jpg`} alt="" />
                              </div>
                              <div className="comment-content">
                                 <div className="content-title d-flex justify-content-between">
                                    <div className="comment-writer">
                                       <h6>Mark Shadow</h6>
                                       <p>Mar 26, 2024 | 06:30pm</p>
                                    </div>
                                    <div className="reply-btn">
                                       <button type="button">Reply</button>
                                    </div>
                                 </div>
                                 <div className="comment-desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="comment-box d-flex comment-active">
                              <div className="comment-image">
                                 <img src={process.env.PUBLIC_URL + `/assets/images/comment-2.jpg`} alt="" />
                              </div>
                              <div className="comment-content">
                                 <div className="content-title d-flex justify-content-between">
                                    <div className="comment-writer">
                                       <h6>Katrin Kay</h6>
                                       <p>Mar 26, 2024 | 06:30pm</p>
                                    </div>
                                    <div className="reply-btn">
                                       <button type="button">Reply</button>
                                    </div>
                                 </div>
                                 <div className="comment-desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="comment-box d-flex">
                              <div className="comment-image">
                                 <img src={process.env.PUBLIC_URL + `/assets/images/comment-1.jpg`} alt="" />
                              </div>
                              <div className="comment-content">
                                 <div className="content-title d-flex justify-content-between">
                                    <div className="comment-writer">
                                       <h6>David Show</h6>
                                       <p>Mar 26, 2024 | 06:30pm</p>
                                    </div>
                                    <div className="reply-btn">
                                       <button type="button">Reply</button>
                                    </div>
                                 </div>
                                 <div className="comment-desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium.</p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="comment-form">
                           <h5>Leave a comment</h5>
                           <CommentForm />
                        </div>
                     </div>

                     <div className="col-lg-3 col-md-4">
                        {/* Blog Sidebar */}
                        <BlogSidebar />
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

export default BlogDetails
