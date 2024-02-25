import React, { useState } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login.jsx";
import { Dashboard } from "./components/Dashboard.jsx";
import { Help } from "./components/Help.jsx";
import { Settings } from "./components/Settings.jsx";
import { Profile } from "./components/Profile.jsx";
import { createContext } from "react";


export const ThemeContext = createContext(null);

function App() {
  const[theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light": "dark"));
  }

  return (
    
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={< Dashboard />} />
        <Route path="/profile" element={< Profile />} />
        <Route path="/help" element={< Help />} />
        <Route path="/settings" element={< Settings />} />
      </Routes>  
      <button className="switch-mode-btn" onClick={toggleTheme} checked={theme === "light"}></button> 
      
      </div>
      
    </ThemeContext.Provider>
    
  );
}

export default App;
