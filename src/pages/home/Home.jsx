import React from "react";
import style from "./Home.module.css";
import HeroSection from "../../components/heroSection/HeroSection";
import Zigzag from "../../../src/Images/zigzag.png";
import Card1 from "../../components/card1/Card1";
import coaching from "../../../src/Images/coaching.png";
import group from "../../../src/Images/group.png";
import message from "../../../src/Images/message.png";
import CommonData from "../../components/CommonData";
import CustomButton from "../../customButton/CustomButton";
import HeroSection2 from "../../components/heroSection2/HeroSection2";
import readingBook from "../../Images/readingBook.png";
import smile from "../../Images/smile.png";

const Home = () => {


const constainer3 = [
  {
    id: 1,
    title:'Balancing your love and work life.',
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
    img: "https://storage.googleapis.com/atalait-web/1/2021/09/ejecutivo-de-tecnologia-700x466.jpg",
  },{
    id: 2,
    title:"A short break from Social Media is important.",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
    img:"https://media.istockphoto.com/photos/stack-of-books-in-home-interior-picture-id532852345?k=6&m=532852345&s=612x612&w=0&h=5folmZQzguOesYnvHTpPRWd4ixOlBoJrL7mONtqbbb0="
  },{
    id: 3,
    title:"How to be 1% Better Every Day",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.",
    img:"https://th.bing.com/th/id/OIP.rL52TnV75LqpgsAxJ33DgQHaE8?pid=ImgDet&w=1200&h=800&rs=1"
  }

]

  return (
    <div>
      <HeroSection 
        title='Proven strategies backed by science for success.'
        heading='Live life at the full potential'
        paragraph='I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?'
        image={smile}
      />

      {/* *************************container 1************************  */}
      <div className={style.container1}>
        <img src={Zigzag} alt="" />
        <div className={style.mid_content}>
          <div className={style.left_side}>
            <h2>I can help you in these particular areas.</h2>
          </div>
          <div className={style.right_side}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
      <div className={style.card_section}>
        <Card1 image={coaching} title="1:1 Coaching" />
        <Card1 image={message} title="Consultation" />
        <Card1 image={group} title="Group Coaching Sessions" />
      </div>


      {/*************************container 2************************ */}
      <div className={style.container2}>
        <h1>Hear out what my clients say about me.</h1>
        <div className={style.card_section2}>
          {CommonData.map((item) => (
            <div className={style.card1} key={item.id}>
              <p>"{item.title}"</p>
              <h5>{item.name}</h5>
              <img src={item.img} alt="" />
              <div className={style.rating}>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>
          ))}
        </div>
      </div>


     { /*************************container 3************************ */}

      <div className={style.container3}>
        <h1>Stay Motivated, read the weekly blog articles.</h1>
        <div className={style.card_section3}>
          {constainer3.map((item) => (
            <div className={style.card2} key={item.id}>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              </div>
          ))}
        </div>
        <CustomButton text="Read More Blogs" />
        </div>
{/* ****************************container 4************************* */}
      <HeroSection2
        heading='Don’t miss out on my ‘Live life at the full potential’ free guide'
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam</p>
      </HeroSection2>

{/* ****************************container 4************************* */}
      <div className={style.container4}>
      <HeroSection
        heading="Get 15-Minutes Complimentary online session."
        paragraph="Limited Period Offer. Claim Now."
        image={readingBook}
      />
      </div>

    </div>
  );
};

export default Home;
