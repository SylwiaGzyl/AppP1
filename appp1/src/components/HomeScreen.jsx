import React, { useState } from "react";
import "./Fontello/css/fontello.css";


export const HomeScreen = (props) => {
    
    
    let list = document.querySelectorAll('.navigation li');
    function activeLink(){
        list.forEach((item) =>
        item.classList.remove('hovered'));
        this.classList.add('hovered');
    }
    list.forEach((item) =>
    item.addEventListener('mouseover', activeLink))

    return(
        
        <div className="main-container">
            
            <div className="navigation">
                <ul>
                    <li>
                        <a href="#">
                            <span class="icons"><i className="icon-cog"></i></span>
                            <span class="title">DayOFF</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icons"><i className="icon-menu"></i></span>
                            <span class="title">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icons"><i className="icon-user"></i></span>
                            <span class="title">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icons"><i className="icon-calendar-check-o"></i></span>
                            <span class="title">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icons"><i className="icon-question"></i></span>
                            <span class="title">Help</span>
                        </a>
                    </li><li>
                        <a href="#">
                            <span class="icons"><i className="icon-logout"></i></span>
                            <span class="title">Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="main-container">
                <div className="topbar">

                </div>
            </div>
        </div>
        
    )
}