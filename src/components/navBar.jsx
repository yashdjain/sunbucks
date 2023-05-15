import React from "react";
import logo from "../assets/starbucks-logo.png"
// import { IoLocationSharp } from '@react-icons/all-files/fa/IoLocationSharp';

function NavBar() {
    return(
        <div className="nav-bar">
            <div className="nav-left">
                <div className="nav-logo">
                    <img className="nav-logo-image" src={logo} alt="starbucks-logo"/>
                </div>
                <div className="nav-left-tabs">
                    <div className="menu">
                        <a href="">Menu</a>
                    </div>
                    <div className="nav-rewards">
                    <a href="">Rewards</a>
                    </div>
                    <div className="nav-gift-cards">
                        <a href="">Gift Cards</a>
                    </div>
                </div>
            </div>
            <div className="nav-right">
                <div className="nav-store-finder">
                    {/* <IoLocationSharp /> */}
                    <a href="">Find a store</a>
                </div>
                <div className="nav-sign-in">
                    <a href="">Sign In</a>
                </div>
                <div className="nav-sign-up">
                    <a href="">Join Now</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;