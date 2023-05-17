import React from "react";
import logo from "../assets/starbucks-logo.png"
import { HiLocationMarker} from 'react-icons/hi';

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
                    <HiLocationMarker />
                    <a href="">Find a store</a>
                </div>
                <a className='btn btn-sign-in' href="">Sign In</a>
                <a className='btn btn-join-now' href="">Join Now</a>
            </div>
        </div>
    )
}

export default NavBar;