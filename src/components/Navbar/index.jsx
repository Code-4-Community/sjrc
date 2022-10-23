import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const OrgNavBar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
            <NavLink to="/" activeStyle>
            Home
            </NavLink>
            <NavLink to="/Org1" activeStyle>
            Org1
            </NavLink>
            <NavLink to="/Org2" activeStyle>
            Org2
            </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default OrgNavBar;