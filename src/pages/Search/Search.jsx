import React, { useState } from 'react';
import "./Search.scss";
import { CiSearch } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
    const closeDropdown = () => setIsDropdownVisible(false); // Hàm để ẩn bảng search

    return (
        <div className="search">
            <IoIosSearch onClick={toggleDropdown} />
            <div className={`search-eveland ${isDropdownVisible ? 'active' : ''}`}>
                <div className="drawer">
                    <h3 className="drawer-title">Start typing and hit Enter</h3>
                </div>

                <form action="/search" className="search-form">
                    <input type="text" name="q" placeholder="Search anything" className="search-input" />
                    <button type="submit" className="check-in"><CiSearch /></button>
                </form>

                <div className="drawer-back">
                    <button className="close" onClick={closeDropdown}><FaTimes /></button>
                </div>
            </div>
        </div>
    );
};

export default Search;
