import React from 'react';
import Data from '../../../data/blog/recent-post.json';
import { Link } from 'react-router-dom';

const RecentPost = () => {
    return (
        <>
            <div className="recent-blog">
                <h4>{Data.secTitle}</h4>
                <div className="blog-items">
                    {
                        Data.dataList.map((data, i) => (
                            <div className="item-box d-flex" key={i}>
                                <div className="item-img">
                                    <Link to={process.env.PUBLIC_URL + data.link}><img src={process.env.PUBLIC_URL + data.thumb} alt="" /></Link>
                                </div>
                                <div className="item-content">
                                    <span className="date">{data.date}</span>
                                    <p className="title"><Link to={process.env.PUBLIC_URL + data.link}>{data.title}</Link></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default RecentPost