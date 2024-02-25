import React from "react";
import { FiActivity } from "react-icons/fi";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineSupportAgent, MdLogout } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";

export const HomeScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="mains">
            <div className="navigation">
                <ul>
                    <li>
                        <a href>
                            <span className="icons"><IoIosAirplane /></span>
                            <span className="title">DayOFF</span>
                        </a>
                    </li>
                    <li className={location.pathname === '/home' ? 'active' : ''}>
                        <a href onClick={() => navigate('/home')}>
                            <span className="icons"><FiActivity /></span>
                            <span className="title">Dashboard</span>
                        </a>
                    </li>
                    <li className={location.pathname === '/profile' ? 'active' : ''}>
                        <a href onClick={() => navigate('/profile')}>
                            <span className="icons"><FaUser /></span>
                            <span className="title">Profile</span>
                        </a>
                    </li>
                    <li className={location.pathname === '/settings' ? 'active' : ''}>
                        <a href onClick={() => navigate('/settings')}>
                            <span className="icons"><FaCalendarAlt /></span>
                            <span className="title">Settings</span>
                        </a>
                    </li>
                    <li className={location.pathname === '/help' ? 'active' : ''}>
                        <a href onClick={() => navigate('/help')}>
                            <span className="icons"><MdOutlineSupportAgent /></span>
                            <span className="title">Help</span>
                        </a>
                    </li>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <a href onClick={() => navigate('/')}>
                            <span className="icons"><MdLogout /></span>
                            <span className="title">Sign Out</span>
                        </a>
                    </li>
                </ul>
                <div className="user-picture">
                    <div className="welcome">Hello Patrycja!</div>
                    <img src="https://media-be.chewy.com/wp-content/uploads/2022/09/27095535/cute-dogs-pembroke-welsh-corgi.jpg" 
                    onClick={() => navigate('/profile')} alt="User Profile"></img>
                </div>
                <div className="mode">
                    <span className="icons"><FaArrowLeft />Change the mode!</span>
                </div>
            </div>
        </div>
    )
}