import React from 'react'
import logo from "../Assets/logo.png";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className ="navbar">
            <div className="logo">
                <img src={logo} alt="Osama hannan" />
            </div>

            <ul>
                <li><Link to ="/"> HOME </Link></li>
                <li><Link to ="/projects"> PROJECTS </Link></li>
                <li><Link to ="/blogs"> BLOGS </Link></li>
                <li><Link to ="/contact"> CONTACT </Link></li>
            </ul>
        </div>
    )
}

export default Navbar
