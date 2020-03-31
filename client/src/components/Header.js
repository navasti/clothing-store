import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
    <nav class="nav">
        <div class="hamburger" onClick="toggleActive">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>

        <div class="managment">
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/login">Account</NavLink>
            <p>Search</p>
            <div class="menu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cloths">Cloths</NavLink>
                <NavLink to="/sales">Sales</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
        {/* <div class="searcher">
            <input type="text"/>
            <NavLink to="/search-results">Find</NavLink>
        </div> */}
    </nav>
    )
}

export default Header
