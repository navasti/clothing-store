import React from 'react'

const CreateAccount = () => {
    return (
    <div class="create-account">
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
    </div>
    )
}

export default CreateAccount
