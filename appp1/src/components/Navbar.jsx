import React, { useState } from "react";
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <div className="navbar-style">
                <NavLink to="/home">Strona Glowna</NavLink>
            </div>
            <div className="navbar-style">
                <NavLink to="/grafik">Grafik</NavLink>
            </div>
            <div className="navbar-style">
                <NavLink to="/zwolnienia">
                    Zwolnienia</NavLink>
            </div>
            <div className="navbar-style">
                <NavLink to="/urlopy">Urlopy</NavLink>
            </div>
            <div className="navbar-style-logout-btn">
                <NavLink to="/">Wyloguj</NavLink>
            </div>
        </nav>
    )

}