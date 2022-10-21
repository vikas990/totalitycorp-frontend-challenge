import React, { useState } from "react";
import "./Navbar.css";
import TeslaLogo from "../../Images/teslaLogoSmall.svg";
import Close from "../../Images/close.png";
import {
  DrawerMenuItems,
  MobileDrawerMenuItems,
} from "../arrayItems/ArrayItems";
import useWindowDimensions from "../../CustomHooks/useWindowSize";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  /**
   * @description Custom hook use to keep check on the window size so that drawer navbar can have different text for mobile and for desktop.
   */
  const { width } = useWindowDimensions();

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
        <p onClick={() => setDrawerOpen(!drawerOpen)}>Menu</p>
      </div>

      {/** Mobile Navbar button */}
      <button
        className="mobile__btn"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        Menu
      </button>

      {/** there are 2 array for navbar because list is different for desktop and mobile */}
      <ul
        className="mobileNavbar"
        style={{
          transform: `${drawerOpen ? "translateX(0)" : "translateX(100%)"}`,
        }}
      >
        <div className="mobileNavbar__close">
          <img
            src={Close}
            alt="Close Button"
            className="mobileNavbar__close-img"
            onClick={() => setDrawerOpen(!drawerOpen)}
          />
        </div>
        {width <= 1200
          ? MobileDrawerMenuItems.map((item, index) => (
              <li key={index}>
                <a href="#foo">{item}</a>
              </li>
            ))
          : DrawerMenuItems.map((item, index) => (
              <li key={index}>
                <a href="#foo">{item}</a>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Navbar;
