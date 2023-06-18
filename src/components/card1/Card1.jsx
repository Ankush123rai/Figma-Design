import React from "react";
import style from "./Card1.module.css";
const Card1 = ({image,title}) => {
  return (
    <div className={style.card}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua minim veniam.
      </p>
    </div>
  );
};

export default Card1;
