import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
    <footer>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/shipping-returns">Shipping & Returns</NavLink>
        <NavLink to="/terms-condition">Terms & Condition</NavLink>
    </footer>
    )
}

export default Footer
