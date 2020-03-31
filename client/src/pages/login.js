import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
    <div class="login">
        <h1>Log in</h1>
        <form>
          <label for="username">Username</label>
          <input type="text" id="username"/>
           <label for="password">Password</label>
          <input type="password" id="password"/>
          <button>Sign in</button>
        </form>
        <div class="help">
          <NavLink to="/forgotten-password">Forgot password?</NavLink>
          <NavLink to="/create-account">Create an account</NavLink>
        </div>
      </div>
    )
}

export default Login
