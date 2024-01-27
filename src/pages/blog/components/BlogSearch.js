import React from 'react';

const BlogSearch = () => {
    return (
        <>
            {/* Blog Search */}
            <div className="blog-search">
                <h4>Blog Search</h4>
                <form action="#">
                    <input type="text" name="search" placeholder="Search Here" />
                    <button type="submit"><i className="las la-search"></i></button>
                </form>
            </div>
        </>
    )
}

export default BlogSearch