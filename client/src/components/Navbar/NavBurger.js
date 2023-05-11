import { useState, useEffect } from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
//import Login from "../login";

const NavBar = () => {

  return (
    <>
        <Nav>
          <NavMenu>
            <NavLink exact to="/">
              Home
            </NavLink>

            <NavLink exact to="/review">
              Review
            </NavLink>

            <NavLink exact to="/search">
              Search
            </NavLink>
            {/* <NavBtn>
			    <Login />
		    </NavBtn> */}
          </NavMenu>
        </Nav>
      
    </>
  );
};

export default NavBar;