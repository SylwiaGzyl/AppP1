import React from "react";
import { FiActivity } from "react-icons/fi";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineSupportAgent, MdLogout } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


export const HomeScreen = (props) => {

    const navigate = useNavigate();

    /*document.addEventListener('DOMContentLoaded', function() {
        let toggle = document.querySelector('.toggle');
        let navigation = document.querySelector('.navigation');
        let mains = document.querySelector('.mains');
    
        toggle.onclick = function(){
            navigation.classList.toggle('active');
            mains.classList.toggle('active');
        };
    });*/

    /*let list = document.querySelectorAll('.navigation li');
    function activeLink(){
        list.forEach((item) =>
        item.classList.remove('hovered'));
        this.classList.add('hovered');
    }
    list.forEach((item) =>
    item.addEventListener('mouseover', activeLink))*/

    return(
        
        <div className="mains">
            
            <div className="navigation">
                <ul>
                    <li>
                        <a href>
                            <span class="icons"><IoIosAirplane /></span>
                            <span class="title">DayOFF</span>
                        </a>
                    </li>
                    <li>
                        <a href onClick={() => navigate('/home')}>
                            <span class="icons"><FiActivity /></span>
                            <span class="title">Dashboard</span>
                            </a>
                    </li>
                    <li>
                        <a href onClick={() => navigate('/profile')}>
                            <span class="icons"><FaUser /></span>
                            <span class="title">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href onClick={() => navigate('/settings')}>
                            <span class="icons"><FaCalendarAlt /></span>
                            <span class="title">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href onClick={() => navigate('/help')}>
                            <span class="icons"><MdOutlineSupportAgent /></span>
                            <span class="title">Help</span>
                        </a>
                    </li><li>
                        <a href onClick={() => navigate('/')}>
                            <span class="icons"><MdLogout /></span>
                            <span class="title">Sign Out</span>
                        </a>
                    </li>
                </ul>
                <div className="user-picture">
                    <div className="welcome">Cześć Jan!</div>
                    <img src="https://media-be.chewy.com/wp-content/uploads/2022/09/27095535/cute-dogs-pembroke-welsh-corgi.jpg"></img>
             </div>
             <div className="mode">
             <span class="icons2"><FaArrowLeft />Change the mode!</span>
             </div>
            </div>
            <div className="main-profile">
                <div className="main-section">
                    <h1> Home </h1>
                </div>
            </div>
        </div>
    )
    
}