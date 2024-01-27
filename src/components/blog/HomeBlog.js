import React from 'react';
import Data from '../../data/blog/home-blog.json';
import { Link } from 'react-router-dom';
import { Styles } from "./styles/homeBlog";

const HomeBlog = () => {
    return (
        <Styles>
            <section className="homeblog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title text-center">
                                <h6>{Data.secTitle}</h6>
                                <h3>{Data.secHeading}</h3>
                            </div>
                        </div>
                        {
                            Data.dataList.map((data, i) => (
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
                                                <img src={process.env.PUBLIC_URL + data.authorThumb} alt="" /><Link to={process.env.PUBLIC_URL + data.authorLink}>{data.author}</Link>
                                            </div>
                                            <Link className="btn-readmore" to={process.env.PUBLIC_URL + data.link}>Read More<i className="las la-angle-double-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Styles>
    );
}

export default HomeBlog;
