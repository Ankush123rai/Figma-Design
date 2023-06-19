import React from "react";
import style from "./HeroSection2.module.css";
import CustomButton from "../../customButton/CustomButton";
import roundImage from "../../Images/roundImage.png";
import message from "../../Images/message.png";

const HeroSection2 = ({heading,children}) => {
  return (
    <div className={style.heroSection2}>
      <div className={style.heroSection2_content}>
        <h2>
          {heading}
        </h2>
        <div className={style.para}>
          {children}
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>

        <CustomButton text="Get your free guide now" link="/freeguide" />
      </div>

      <div className={style.heroSection2_img}>
        <div className={style.round}>free Fuide</div>
        <h2>Are you ready to transform your life?</h2>
        
          <img src={roundImage} />
        
        <div className={style.transparent}>
          <div style={{display:"flex",alignItems:"center",gap:'.5rem', fontWeight:"700", fontSize:"1.2rem"}}>
            <span>
              <img src={message} />
            </span>
            Ready to start? Let's talk!
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
