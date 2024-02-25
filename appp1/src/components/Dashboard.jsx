import React from "react";
import { HomeScreen } from "./HomeScreen.jsx";

export const Dashboard = () => {
    return(
        <div className="mains">
            <HomeScreen />
            <div className="main-profile">
                <div className="main-section">
                    <h1> Home </h1>
                </div>
            </div>
        </div>
    )
}