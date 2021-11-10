import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  const [showMenu, setShowMenu] = useState(false);
  
  const scrollToBottom = () =>{
    window.scrollTo({
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth'
    });
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="osamahannan">
          Osama Hannan
        </Link>
      </div>

      {isMobile ? (<ul>
        {showMenu ? <ImCross className="cross" onClick={() => setShowMenu(!showMenu)} /> : <GiHamburgerMenu className="hamburger" onClick={() => setShowMenu(!showMenu)} />} </ul>
      ) : ""}

      <ul className={showMenu ? "hidden active" : "hidden"}>
        <div className="navdiv">
          <li>
            <Link to="/" onClick={() => setShowMenu(false)} className ="noSelect"> HOME </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setShowMenu(false)} className ="noSelect"> PROJECTS </Link>
          </li>
          <li>
            <Link to="#/" onClick={() => {setShowMenu(false); scrollToBottom();}} className ="noSelect"> CONTACT </Link>
          </li>
        </div>
      </ul>

    </div>
  );
};

export default Navbar;
