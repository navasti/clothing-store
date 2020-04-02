import React from 'react'
import { NavLink } from 'react-router-dom';

const CreateAccount = () => {
    return (
    <div className="create-account">
        <h1>Create an account</h1>
        <form>
            <label for="username">Username</label>
            <input type="text" id="username"/>
            <label for="email">Email</label>
            <input type="email" id="email"/>
            <label for="password">Password</label>
            <input type="password" id="password"/>
            <button>Sign up</button>
        </form>
        <NavLink to="/login">Sign In</NavLink>
    </div>
    )
}

export default CreateAccount
