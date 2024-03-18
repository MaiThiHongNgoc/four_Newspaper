import React, { useState, useEffect } from 'react';
import "./Search.scss";
import { CiSearch } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { dataShop as data } from '../../data';
import { useNavigate } from 'react-router-dom'; // Import useNavigate từ react-router-dom

const Search = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [visibleResults, setVisibleResults] = useState(10);
    const navigate = useNavigate(); // Khởi tạo navigate từ useNavigate()

    const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);
    const closeDropdown = () => setIsDropdownVisible(false);

    const handleSearchChange = (e) => {
        const input = e.target.value.toLowerCase();
        setSearchInput(input);
        const filtered = data.filter(item => 
            item.title.toLowerCase().includes(input)
        );
        setSearchResults(filtered);
        setVisibleResults(5);
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight
        ) {
            setVisibleResults(prev => prev + 5);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hàm xử lý khi nhấp vào sản phẩm trong kết quả tìm kiếm
    const handleProductClick = (productId) => {
        navigate(`/ProductDetails/${productId}`); // Sử dụng navigate để chuyển hướng đến trang Productdetails/40
    };

    return (
        <div className="search">
            <IoIosSearch onClick={toggleDropdown} />
            <div className={`search-eveland ${isDropdownVisible ? 'active' : ''}`}>
                <div className="drawer">
                    <h3 className="drawer-title">Start typing and hit Enter</h3>
                </div>

                <form action="/search" className="search-form">
                    <input 
                        type="text" 
                        name="q" 
                        placeholder="Search anything" 
                        className="search-input" 
                        onChange={handleSearchChange}
                        value={searchInput}
                    />
                    <button type="submit" className="check-in"><CiSearch /></button>
                </form>

                {searchResults.length > 0 && (
                    <div className="search-results">
                        {searchResults.slice(0, visibleResults).map(item => (
                            <div key={item.id} className="search-item" onClick={() => handleProductClick(item.id)}> {/* Thêm sự kiện onClick và gọi handleProductClick */}
                                <img src={item.img} alt={item.title} className="search-item-img" />
                                <div className="search-item-details">
                                    <p className="search-item-title">{item.title}</p>
                                    <p className="search-item-price">${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="drawer-back">
                    <button className="close" onClick={closeDropdown}><FaTimes /></button>
                </div>
            </div>
        </div>
    );
};

export default Search;
