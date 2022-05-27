import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Typography } from "@material-ui/core";
const NavbarComponent = () => {
  const handleClick = () => {
    const primaryNav = document.querySelector(".nav-list");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  };
  return (
    <div className="header flex">
      <Link to={"/"}>
        <div className="logo"></div>
      </Link>

      <button
        onClick={handleClick}
        className="mobile-nav-toggle"
        aria-controls="nav-list"
        aria-expanded="false"
      ></button>

      <div className="nav">
        <ul id="nav-list" data-visible="false" className="nav-list flex">
          <li className="nav-item">
            <NavLink
              className={(navData) => (navData.isActive ? "active-nav" : "")}
              to="/"
            >
              <span>00</span>Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={(navData) => (navData.isActive ? "active-nav" : "")}
              to="/auth"
            >
              <span>01</span>Sign in
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComponent;
