import React from "react";
import style from "./ExtraSale.module.css";
import HeroSection from "../../components/heroSection/HeroSection";
import chasmawali from "../../images/chasmawali.png";
import { MdLayers } from "react-icons/md";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BsCircleSquare } from "react-icons/bs";
import { FaCuttlefish } from "react-icons/fa";
import { SiQuicktime } from "react-icons/si";
import CommonData from "../../components/CommonData";
import WorkFeatures from "../../components/workFeatures/WorkFeatures";
import QuerySection from "../../components/querySection/QuerySection";
const ExtraSale = () => {
  const features = [
    {
      icon: <MdLayers />,
      title: "Layers",
    },
    {
      icon: <AiTwotoneThunderbolt />,
      title: "Sisyphus",
    },
    {
      icon: <BsCircleSquare />,
      title: "Circooles",
    },
    {
      icon: <FaCuttlefish />,
      title: "Catalog",
    },
    {
      icon: <SiQuicktime />,
      title: "Quotient",
    },
  ];

 

  return (
    <div>
      <HeroSection
        title="Proven strategies backed by science for success."
        heading="About me"
        paragraph="I help people to discover their true potential and live a fulfilling life...
        Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?"
        image={chasmawali}
      />
      <div className={style.features}>
        <p>From startups to the world’s largest companies</p>
        <div className={style.featuresContainer}>
          {features.map((feature,ind) => (
            <div className={style.feature} key={ind}>
              <div className={style.icon}>{feature.icon}</div>
              <div className={style.title}>{feature.title}</div>
           </div>  
          ))} 
        </div>
      </div>


      <div className={style.features2}>
        <h1>Hear out what my clients say about me.</h1>
        <div className={style.features_card}>
          {CommonData.map((item) => (
            <div className={style.card1} key={item.id}>
              <h3>5/5</h3>
              <p>"{item.title}"</p>
              <h5>{item.name}</h5>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>

       <WorkFeatures/>
       <QuerySection/>
    </div>
  );
};

export default ExtraSale;
