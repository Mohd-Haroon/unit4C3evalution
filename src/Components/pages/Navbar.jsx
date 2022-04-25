import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully

  return (
    <>
      <nav style={{ height: "50px", backgroundColor: "pink" }}>
        {/* keep all the NavLinks here */}
        <NavLink style={{ margin: "5px", textDecoration: "none" }} to="/">
          Home
        </NavLink>
        <NavLink style={{ margin: "5px", textDecoration: "none" }} to="/about">
          About
        </NavLink>
        <NavLink style={{ margin: "5px", textDecoration: "none" }} to="/books">
          Books
        </NavLink>
        {token ? (
          <NavLink
            style={{ margin: "5px", textDecoration: "none" }}
            to="/logout"
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            style={{ margin: "5px", textDecoration: "none" }}
            to="/login"
          >
            Login
          </NavLink>
        )}
      </nav>
    </>
  );
};
