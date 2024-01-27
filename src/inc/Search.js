import { useState } from 'react';
import { Styles } from "./styles/search.js";

const Search = () => {
    const [isActive, setActive] = useState(false);

    const activeClass = () => {
        setActive(!isActive);
    };

    return (
        <Styles>
            {/* Search Box */}
            <button type="button" className="nav-link nav-search" onClick={activeClass}>
                <i className="las la-search"></i>
            </button>
            {/* Fullscreen search */}
            <div className={isActive ? 'search-wrap active' : 'search-wrap'} id="search-wrap">
                <div className="search-overlay custom-overlay" onClick={activeClass}></div>
                <div className="search-inner">
                    <form method="get" className="search-form">
                        <input type="search" name="search" placeholder="Type and hit enter...." />
                        <button type="button" onClick={activeClass} className="close-search"><i className="las la-times"></i></button>
                    </form>
                </div>
            </div>
        </Styles>
    )
}

export default Search
