import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const toggleActive = () => {
        const menu = document.querySelector('.menu')
        menu.classList.toggle('active')
        const bars = document.querySelectorAll('.bar')
        bars.forEach(bar => bar.classList.toggle('active'));
    }

    return (
    <nav className="nav">
        <div className="hamburger" onClick={toggleActive}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>

        <div className="managment">
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/login">Account</NavLink>
            <p>Search</p>
            <div className="menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cloths">Cloths</NavLink>
                <NavLink to="/sales">Sales</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
        {/* <div className="searcher">
            <input type="text"/>
            <NavLink to="/search-results">Find</NavLink>
        </div> */}
    </nav>
    )
}

export default Header
