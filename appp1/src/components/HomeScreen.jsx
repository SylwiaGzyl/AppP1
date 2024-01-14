import React, { useState } from "react";
import { Navbar } from "./Navbar";


export const HomeScreen = (props) => {
    return(
        <div className="main-container">
            
                <Navbar /> 
            
         <section>
            <form>
                Witaj! Na tej stronie możesz zobaczyć oraz edytować swoje dane osobowe.
            </form>
            </section>    
        </div>
    )
}