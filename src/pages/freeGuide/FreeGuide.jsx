import React from 'react'
import style from './FreeGuide.module.css'
import HeroSection from '../../components/heroSection/HeroSection'
import meeting from '../../images/meeting.png'
import WorkFeatures from '../../components/workFeatures/WorkFeatures'
import ReadingBook from '../../components/readingBook/ReadingBook'
import Testimonials from '../../components/testimonials/Testimonials'
import readingBook from '../../images/readingBook.png'
import QuerySection from '../../components/querySection/QuerySection'
import {ImCross} from 'react-icons/im'
import {FaCheck} from 'react-icons/fa'
import leave from '../../images/leave.png'
const FreeGuide = () => {

  const arr=[
    {
      id:1,
      title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id:2,
      title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id:3,
      title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id:4,
      title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ]
  return (
    <>
      <HeroSection
        title="Proven strategies backed by science for success."
        heading='Self Esteem Therapy'
        paragraph='I help people to discover their true potential and live a fulfilling life...
        Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?'
        image={meeting}
      />
      <WorkFeatures/>
      <ReadingBook/>
      <Testimonials/>

      <div className={style.freeGuide}>
      <div className={style.heading}>
          <p>This is not for everyone!</p>
          <h1>This program is perfect for you if...</h1>
      </div>
      <div className={style.freeGuideContent}>
        <div className={style.freeGuideContentLeft}>
        <h4>This is NOT for you if...</h4>
          {arr.map((item,ind)=>(
            <div className={style.wrong} key={ind}>
              <span><ImCross/></span>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className={style.freeGuideContentRight}>
        <h4>This is for you if...</h4>
        {arr.map((item,ind)=>(
            <div className={style.right} key={ind}>
              <span><FaCheck/></span>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        </div>
      </div>

      <HeroSection
        heading="Get 15-Minutes Complimentary online session."
        paragraph="Limited Period Offer. Claim Now."
        image={readingBook}
      />

          <div className={style.green_round}>
          <img src={leave} alt="image" />
          <h2>Guarantee</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
         <p> sed do eiusmod tempor incididunt ut labore et dolore </p>
         <p> magna aliqua minim veniam.</p>
          </div>

      <QuerySection/>
    </>
  )
}

export default FreeGuide