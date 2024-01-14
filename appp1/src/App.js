import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
import { Login } from "./components/Login.jsx";
import { HomeScreen } from "./components/HomeScreen";
import { Routes, Route } from 'react-router-dom';
import { createContext } from "react";
import { Grafik } from "./components/Grafik";
import { Urlopy } from "./components/Urlopy";
import { Zwolnienia } from "./components/Zwolnienia";

export const ThemeContext = createContext(null);

function App() {
  const navigate = useNavigate()
  const[theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark": "light"));
  }

  return (
    
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={< HomeScreen />} />
        <Route path="/grafik" element={< Grafik />} />
        <Route path="/urlopy" element={< Urlopy />} />
        <Route path="/zwolnienia" element={<Zwolnienia />} />
      </Routes>
      
      <button className="switch-mode-btn" onClick={toggleTheme} checked={theme === "dark"}>Switch color mode</button>
      
      </div>
      
    </ThemeContext.Provider>
    
  );
}

export default App;
