import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="osamahannan">
          Osama Hannan
        </Link>
      </div>

      {isMobile ? (<button onClick={()=>setShowMenu(!showMenu)}>
        {showMenu ? <ImCross className="cross" /> : <GiHamburgerMenu className="hamburger" />} </button>
      ) : ""}

      <ul className={showMenu ? "hidden active" : "hidden"}>
        <li>
          <Link to="/" onClick={() => setShowMenu(false)}> HOME </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setShowMenu(false)}> PROJECTS </Link>
        </li>
        <li>
          <Link to="#/" onClick={() => setShowMenu(false)}> CONTACT </Link>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;
