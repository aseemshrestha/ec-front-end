import React from 'react';
import BlogSearch from './components/BlogSearch';
import BlogCategory from './components/BlogCategory';
import RecentPost from './components/RecentPost';
import BlogTag from './components/BlogTag';

const BlogSidebar = () => {
    return (
        <div className="blog-sidebar-area">
            <div className="row">
                <div className="col-md-12">
                    <BlogSearch />
                </div>
                <div className="col-md-12">
                    <BlogCategory />
                </div>
                <div className="col-md-12">
                    <RecentPost />
                </div>
                <div className="col-md-12">
                    <BlogTag />
                </div>
            </div>
        </div >
    )
}

export default BlogSidebar