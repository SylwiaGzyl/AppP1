import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const Urlopy = () => {
    return(
       <div className="main-container">
            
                <Navbar /> 
            
         <section>
            <form>
                Witaj! Na tej stronie możesz złożyć wniosek o urlop oraz zobaczyć, ile ci jeszcze przysługuje.
            </form>
            </section>    
        </div>
    )
}