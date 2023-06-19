import React from 'react'
import style from './Testimonials.module.css'

const Testimonials = () => {
    const CommonData = [
        {
            id: 1,
            name: "Jane",
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            job: "CEO",
            img: "https://th.bing.com/th/id/OIP.TRlmUwZi5NpGTd7_-E_1NAAAAA?pid=ImgDet&rs=1",
        },
        {
            id: 2,
            name: "cristina",
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            job: "developer",
            img: "https://th.bing.com/th/id/OIP.LAO1Uu1ZML-HCylLYq15XAHaHb?pid=ImgDet&w=510&h=512&rs=1",
        },
        {
            id: 3,
            name: "Jane",
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            job: "designer",
            img: "https://th.bing.com/th/id/OIP.XUBwuHoU6woHCGxDNv9aDwHaJQ?pid=ImgDet&w=960&h=1200&rs=1",
        },
        {
            id: 4,
            name: "Jane",
            title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            job: "designer",
            img: "https://th.bing.com/th/id/OIP.XUBwuHoU6woHCGxDNv9aDwHaJQ?pid=ImgDet&w=960&h=1200&rs=1",
        },
    ]
    
  return (
    <>
    <div className={style.Testimonials_heading}>
            <p>Testimonials</p>
            <h2>Results that speak for themselves</h2>
    </div>
    <div className={style.Testimonials}>
    
        <div className={style.Testimonials_card}>
          {CommonData.map((item) => (
            <div className={style.card1} key={item.id}>
              <p>"{item.title}"</p>
              <img src={item.img} alt="image" />
              <h5>{item.name}</h5>
              <p>{item.job}</p>
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
    </>
  )
}

export default Testimonials