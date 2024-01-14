import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const Zwolnienia = () => {
    return(
        <div className="main-container">
            
                <Navbar /> 
            
         <section>
            <form>
                Witaj! Na tej stronie możesz zgłosić swoje wszelkie nieobecności i jednocześnie zobaczyć, ile ich już masz.
            </form>
            </section>    
        </div>
    )
}