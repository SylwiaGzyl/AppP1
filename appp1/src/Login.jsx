import React, { useState } from "react";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="login-form-container"> 
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input value={email} type="email"  placeholder="enter email" id="email" name="email"/>
            <label htmlFor ="password">Password: </label>
            <input value={pass} type="password" placeholder="enter password" id="password" name="password"/>
            <button className="submit-btn" type="Submit">Log In</button>
        </form>
        <button className="switch-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}