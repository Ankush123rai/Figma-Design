import React from "react";
import style from "./Footer.module.css";
import CustomButton from "../../customButton/CustomButton";
import vector from "../../Images/Vector.png";
import {FaLinkedin, FaInstagram,FaFacebook} from "react-icons/fa";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_top}>
        <div className={style.footer_top_left}>
          <h2>Get notified when I publish new articles</h2>
          <p>
            Stay up to date with the latest news, announcements, and articles.
          </p>
        </div>
        <div className={style.footer_top_right}>
          <input type="text" placeholder="Enter your email address" />
          <CustomButton text="Subscribe" />
        </div>
      </div>

      <div className={style.footer_bottom}>
        <div className={style.bottom_first}>
          <div className={style.navbar_logo}>
            <img src={vector} alt="logo" />
            <h2>Happy Coaching</h2>
          </div>
          <p>Design amazing digital experiences that create more happy in the world.</p>
        </div>
        <div className={style.bottom_second}>
            <h2>Page</h2>
          <p>Home</p>
          <p>Services</p>
          <p>About Us</p>
          <p>Extra Sale/ Landingpage</p>
          <p>Free Guide</p>
        </div>
        <div className={style.bottom_second}>
            <h2>contact</h2>
            <p>+123 456 789</p>
            <p>ankush98rai@gmail.com</p>
            <p>Instagram</p>
            <p>Linkedin</p>
         </div>   
      </div>
      
      <div className={style.title}>
            <p>Made by <span>Ankush Rai</span></p>
            <div className={style.socail_icons}>
                <FaLinkedin/>
                <FaInstagram/>
                <FaFacebook/>
            </div>
      </div>
    </div>
  );
};

export default Footer;
