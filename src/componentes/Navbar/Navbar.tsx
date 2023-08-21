import React from "react";
import { Item, Nav } from "./styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Item>Podcaster</Item>
      </Link>
      {/* <Loader /> */}
    </Nav>
  );
};

export default Navbar;
