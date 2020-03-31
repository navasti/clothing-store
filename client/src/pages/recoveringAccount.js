import React from 'react'

const RecoveringPassword = () => {
    return (
    <div class="forgotten-password">
        <h1>Recover your password</h1>
        <form>
            <label for="username">Username</label>
            <input type="text" id="username"/>
            <label for="email">Email</label>
            <input type="email" id="email"/>
            <button>Recover</button>
        </form>
    </div>
    )
}

export default RecoveringPassword
