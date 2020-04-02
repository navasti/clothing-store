import React from 'react'
import { NavLink } from 'react-router-dom';

const RecoveringPassword = () => {
    return (
    <section className="forgotten-password">
        <h1>Recover your password</h1>
        <form>
            <label for="username">Username</label>
            <input type="text" id="username"/>
            <label for="email">Email</label>
            <input type="email" id="email"/>
            <button>Recover</button>
        </form>
        <NavLink to="/login">Sign In</NavLink>
    </section>
    )
}

export default RecoveringPassword
