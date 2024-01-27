import React from 'react';
import { Link } from 'react-router-dom';

const BlogTag = () => {
    return (
        <>
            {/* Blog Tag */}
            <div className="blog-tags">
                <h4>Blog Tag</h4>
                <div className="tag-box">
                    <Link to={process.env.PUBLIC_URL + "/"}>HTML</Link>
                    <Link to={process.env.PUBLIC_URL + "/"}>CSS</Link>
                    <Link to={process.env.PUBLIC_URL + "/"}>Jquery</Link>
                    <Link to={process.env.PUBLIC_URL + "/"}>Photoshop</Link>
                    <Link to={process.env.PUBLIC_URL + "/"}>Javascript</Link>
                    <Link to={process.env.PUBLIC_URL + "/"}>Laravel</Link>
                    <Link to={process.env.PUBLIC_URL + "/"}>Wordpress</Link>
                    <Link to={process.env.PUBLIC_URL + "/"}>Bootstrap 5</Link>
                    <Link to={process.env.PUBLIC_URL + "/"}>React Js</Link>
                </div>
            </div>
        </>
    )
}

export default BlogTag