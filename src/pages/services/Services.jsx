import React from "react";
import style from "./Services.module.css";
import HeroSection from "../../components/heroSection/HeroSection";
import readingBook from "../../Images/readingBook.png";
import Card1 from "../../components/card1/Card1";
import coaching from "../../../src/Images/coaching.png";
import group from "../../../src/Images/group.png";
import message from "../../../src/Images/message.png";
import smile from "../../../src/Images/smile.png";
import {HiOutlineChatAlt2} from "react-icons/hi";
import {AiOutlineCalendar} from "react-icons/ai";
import {RiFunctionLine} from "react-icons/ri";
import {IoChatbubbleOutline} from "react-icons/io5";

const Services = () => {

  const service2_arr = [
    {
      id: 1,
      icon: <HiOutlineChatAlt2 />,
      title:"Talk to me first",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      id: 2,
      icon: <AiOutlineCalendar />,
      title:"Schedule a metting",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      id: 3,
      icon: <RiFunctionLine />,
      title:"Online consultation",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      id: 4,
      icon: <IoChatbubbleOutline />,
      title:"Ready to start? Let’s talk!",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
  ]

  return (
    <>
      <HeroSection
        title="I can help you in these patricular areas."
        heading="I help people to discover their true potential"
        paragraph="I help people to discover their true potential and live a fulfilling life...
         Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?"
        image={readingBook}
      />


    <div className={style.service1}>
      <h1>I can help you in these particular areas.</h1>
      <div className={style.service1_card}>
      <Card1 image={group} title="Group Coaching Sessions" />
        <Card1 image={coaching} title="Online course" />
        <Card1 image={message} title="Consultation" />
        <Card1 image={coaching} title="1:1 Coaching" />
        
      </div>
    </div>


    <div className={style.service2}>
      <div className={style.service2_top}>
        <p>How does it work?</p>
        <h2>Are you ready to transform your life?</h2>
        <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p1>
      </div>
      <div className={style.service2_bottom}>
        <div className={style.service2_bottom_left}>
          <div className={style.service2_bottom_left_list}>
            {service2_arr.map((item) => (
              <div className={style.service2_bottom_left_list_item}>
                <div className={style.service2_bottom_left_list_item_icon}>
                  <span>{item.icon}</span>
                  </div>
                  <div className={style.service2_bottom_left_list_item_text}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    </div>
              </div>
            ))}
            </div>
        </div>
        <div className={style.service2_bottom_right}>
        <img src={smile} alt="image" />
        </div>
      </div>
    </div>

    </>
  );
};

export default Services;
