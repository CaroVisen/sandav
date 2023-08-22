import React, { useEffect } from "react";
import { Item, Nav } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const Navbar = () => {
  const isLoading = useSelector((state: any) => state.isLoading);

  console.log(isLoading);
  return (
    <Nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Item>Podcaster</Item>
      </Link>
      {isLoading.isLoading && (
        <CircularProgress style={{ color: "blue", margin: "10px" }} />
      )}
    </Nav>
  );
};

export default Navbar;
