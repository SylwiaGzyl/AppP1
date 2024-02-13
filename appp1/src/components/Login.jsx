import React, { useState } from "react";
import { HomeScreen } from "./HomeScreen";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    
    const navigate = useNavigate()
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        
        <div className="login-form-container"> 
        <form className="logo">
        DAYOFF
      </form>
        <form className="login-form" onSubmit={handleSubmit}>
            
            <label htmlFor="email">Email: </label>
            <input value={email} type="email"  placeholder="enter email" id="email" name="email"/>
            <label htmlFor ="password">Password: </label>
            <input value={pass} type="password" placeholder="enter password" id="password" name="password"/>
            
            <button onClick={() => navigate('home')} className="submit-btn" type="Submit">Log In</button>
            <Popup trigger={<button className="register-btn"> You don't have an account?</button>} position="right center">
                <div>Contact your manager to provide one.</div>
            </Popup>
        </form>

        </div>
    )
}