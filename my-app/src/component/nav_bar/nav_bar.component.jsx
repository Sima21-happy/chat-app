import React from "react";
import './nav_bar.style.css'
import  Logo from'../../assets/logo.images/logo.png'

const NavBar=()=>{

    return(
        <div className="Nav_bar" style={{
            display:"flex"
        }}>

            <div>
            <img src={Logo} height="80px" width="80px" alt="logo" />
            </div>
            <div>
            <ul>
               <li>Home</li>
                <li>About</li>
                <li>Contact</li>
             

            </ul>
            </div>
  
        </div>


    );
}
export default NavBar;