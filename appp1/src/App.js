import React, { useState } from "react";
import './App.css';
import { useNavigate, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login.jsx";
import { HomeScreen } from "./components/HomeScreen.jsx";
import { Help } from "./components/Help.jsx";
import { Settings } from "./components/Settings.jsx";
import { Profile } from "./components/Profile.jsx";
import { createContext } from "react";


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
        <Route path="/profile" element={< Profile />} />
        <Route path="/help" element={< Help />} />
        <Route path="/settings" element={< Settings />} />
      </Routes>  
      <button className="switch-mode-btn" onClick={toggleTheme} checked={theme === "dark"}></button> 
      
      </div>
      
    </ThemeContext.Provider>
    
  );
}

export default App;
