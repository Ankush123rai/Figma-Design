import React from 'react'
import style from './AboutUs.module.css'
import HeroSesction2 from '../../components/heroSection2/HeroSection2'
import CustomButton from '../../customButton/CustomButton'
import Testimonials from '../../components/testimonials/Testimonials'
import ReadingBook from '../../components/readingBook/ReadingBook'
import smile from "../../Images/smile.png"

const AboutUs = () => {
  return (
    <>
      <HeroSesction2 heading='Results that speak for themselves'>
        <div className={style.input_form}>
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Enter your email'/>
          <p>We care about your data in our <a href="#">privacy policy</a></p>
        </div>
      {/* <CustomButton text='Get free guide'/> */}
      </HeroSesction2>


      <Testimonials/>
      <ReadingBook/>

      <div className={style.aboutus_bottom}>
        <div className={style.aboutus_bottom_side}>

          <div className={style.left_img1}>
            <img src={smile} alt="image" />
          </div>
          <div className={style.left_img2}>
            <img src={smile} alt="image" />
          </div>

        </div>
        <div className={style.aboutus_bottom_mid}>
        <h2>Don’t miss out on my <span>‘Live life at the full potential’</span> free guide</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
        <p> eiusmod tempor incididunt ut labore et dolore magna aliqua minim </p>
        <p> veniam. Sed ut perspiciatis unde omnis iste natus error sit</p>
        <p>voluptatem accusantium doloremque laudantium.</p>
        
        <div className={style.rating_view}>
        <CustomButton text='Download my Get free guide'/>
        <p>More than 100+ 5 star reviews</p>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
        </div>
        <div className={style.aboutus_bottom_side}>
        <div className={style.left_img4}>
            <img src={smile} alt="image" />
          </div>
          <div className={style.left_img5}>
            <img src={smile} alt="image" />
          </div>
          <div className={style.left_img6}>
            <img src={smile} alt="image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs