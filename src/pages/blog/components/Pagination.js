import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
    return (
        <>
            {/* Pagination */}
            <div className="pagination-box text-center">
                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                        <Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-double-left"></i></Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to={process.env.PUBLIC_URL + "/"}>1</Link>
                    </li>
                    <li className="list-inline-item active">
                        <Link to={process.env.PUBLIC_URL + "/"}>2</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to={process.env.PUBLIC_URL + "/"}>3</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to={process.env.PUBLIC_URL + "/"}>...</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to={process.env.PUBLIC_URL + "/"}>11</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to={process.env.PUBLIC_URL + "/"}><i className="las la-angle-double-right"></i></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Pagination