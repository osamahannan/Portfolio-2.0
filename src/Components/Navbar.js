import React from 'react'
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/" className="osamahannan">Osama Hannan</Link>
            </div>

            <ul>
                <li><Link to="/"> HOME </Link></li>
                <li><Link to="/projects"> PROJECTS </Link></li>
                <li><Link to=""> CONTACT </Link></li>
            </ul>
        </div>
    )
}

export default Navbar
