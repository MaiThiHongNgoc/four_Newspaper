import React from 'react'
import "./Search.scss"
import { CiSearch } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
const Search = () => {
    return (
        <div className="search">
            <div className="search-eveland"></div>

            <div className="active">
                <div className="drawer">
                    <h3 className="drawer-title">Start typing and hit Enter</h3>
                </div>

                <form action="/search" className="search-form">
                    <input type="text" name="q" placeholder="Search anything" className="search-input" />
                    <button type="submit" className="check-in"><CiSearch /></button>
                </form>

                <div className="drawer-back">
                    <a href="" className="close"><FaXmark /></a>
                </div>
            </div>
        </div>
    )
}

export default Search