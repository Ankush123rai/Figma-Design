import React from "react";
import style from "./ReadingBook.module.css";
import { RiFunctionLine } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import overlay from "../../Images/overlay.png";

const ReadingBook = () => {
  return (
    <div className={style.reading_book}>
      <div className={style.reading_book_container}>
        <div className={style.reading_book_left_side}>
          <p>How does it work?</p>
          <h2>Are you ready to transform your life?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
        <div className={style.reading_book_right_side}>

          <div className={style.content}>
            <div className={style.content_icon}>
             <RiFunctionLine />
            </div>
            <div className={style.content_inside}>
              <h4>Online consultation</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className={style.content}>
            <div className={style.content_icon}>
             <IoChatbubbleOutline/>
            </div>
            <div className={style.content_inside}>
              <h4>Ready to start? Let’s talk!</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className={style.reading_book_img}>
        <img src={overlay} alt="image" />
      </div>
    </div>
  );
};

export default ReadingBook;
