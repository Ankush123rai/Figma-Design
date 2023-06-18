import React from "react";
import style from "./CustomButton.module.css";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ text, link }) => {
  const navigate = useNavigate();
  return (
    <button className={style.cus_btn} onClick={() => navigate(link)}>
      {text}
    </button>
  );
};

export default CustomButton;
