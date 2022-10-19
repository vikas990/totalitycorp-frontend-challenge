import React from "react";
import "./Navbar.css";
import TeslaLogo from "../../Images/teslaLogoSmall.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={TeslaLogo} alt="Tesla Logo" />
      </div>
      <div className="navbar__center">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panels</p>
      </div>
      <div className="navbar__right">
        <p>Shop</p>
        <p>Account</p>
        <p>Menu</p>
      </div>
    </div>
  );
};

export default Navbar;
