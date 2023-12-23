import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Images/ieslogo.png";
import "../Components/Navbar.css";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="navbar">
      <h3 className="brand">
        <img src={logo} className="logo" alt="logo" /> IVAN ELITE SCHOOL
      </h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">About us</a>
        <a href="/#">Mission & Vission</a>
        <a href="/#">Learning</a>
        <a href="/#">Admissions</a>
        <a href="/#">Contact us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <span className="slogan">Nurturing success</span>
    </header>
  );
};

export default Navbar;
