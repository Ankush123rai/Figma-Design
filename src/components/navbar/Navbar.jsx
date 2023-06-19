import React from "react";
import style from "./Navbar.module.css";
import vector from "../../Images/Vector.png";
import { NavLink } from "react-router-dom";
import CustomButton from "../../customButton/CustomButton";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [responsive, setResponsive] = React.useState(false);
  return (
    <div className={style.navbar}>
      <div className={style.navbar_logo}>
        <img src={vector} alt="logo" />
        <h2>Happy Coaching</h2>
      </div>
      <div
        className={responsive ? style.navbar_responsive : style.navbar_links}
      >
        <NavLink to="/" className={style.navbar_link}>
          Home
        </NavLink>
        <NavLink to="/services" className={style.navbar_link}>
          Services
        </NavLink>
        <NavLink to="/aboutus" className={style.navbar_link}>
          About Us
        </NavLink>
        <NavLink to="/extrasale" className={style.navbar_link}>
          Extra Sale
        </NavLink>
        <NavLink to="/freeguide" className={style.navbar_link}>
          <CustomButton text="Get Your free Guide" />
        </NavLink>
      </div>
      <GiHamburgerMenu
        onClick={() => setResponsive(!responsive)}
        className={style.navbar_hamburger}
      />
    </div>
  );
};

export default Navbar;
