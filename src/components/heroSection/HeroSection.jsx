import React from "react";
import style from "./HeroSection.module.css";
import CustomButton from "../../customButton/CustomButton";

const HeroSection = ({title,heading,paragraph,image}) => {
  return (
    <div className={style.heroSection}>
      <div className={style.heroSection_content}>
        <p>{title}</p>
        <h2>{heading}</h2>
        <p className={style.para}>
          {paragraph}
        </p>
        <CustomButton text='Get your free guide now' link='/freeguide'/>
      </div>
      <div className={style.heroSection_img}>
        <img src={image} />
      </div>
    </div>
  );
};

export default HeroSection;
