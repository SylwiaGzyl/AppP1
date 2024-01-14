import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const Grafik = (props) => {
    return(
        <div className="main-container">
            
                <Navbar /> 
            
         <section>
            <form>
                Witaj! Na tej stronie możesz zoabczyć swoje godziny pracy oraz zgłosić prośby grafikowe do przełożonego.
            </form>
            </section>    
        </div>
    )
}