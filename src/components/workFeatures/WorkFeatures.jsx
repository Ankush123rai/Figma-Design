import React, { useState } from 'react'
import style from './WorkFeatures.module.css' 
import { FaCalendar } from "react-icons/fa";  

const WorkFeatures = () => {

    const Data = [
        {
            id: 1,
            icon: <FaCalendar/>,
            title:"Ready to start? Let’s talk!",
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 2,
            icon: <FaCalendar/>,
            title:"Ready to start? Let’s talk!",
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 3,
            icon: <FaCalendar/>,
            title:"Ready to start? Let’s talk!",
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 4,
            icon: <FaCalendar/>,
            title:"Ready to start? Let’s talk!",
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 5,
            icon: <FaCalendar/>,
            title:"Ready to start? Let’s talk!",
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 6,
            icon: <FaCalendar/>,
            title:"Ready to start? Let’s talk!",
            paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },

    ]
  return (
    <div className={style.container}>
        <div className={style.heading}>
        <p>How does it work?</p>
        <h2>Are you ready to transform your life?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
        </div>
        <div className={style.features}>
            {Data.map((item,ind) => (
                <div className={style.feature_card} key={ind}>   
                    <div className={style.icon}>{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.paragraph}</p>
                </div>
            ))}    

        </div>
    </div>
  )
}

export default WorkFeatures