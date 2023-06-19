import React, { useState } from "react";
import style from "./QuerySection.module.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import CustomButton from "../../customButton/CustomButton";

const QuerySection = () => {
  const query_arr = [
    {
      id: 1,
      question: "How long does the coaching process take?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What if I wanted to end my coaching engagement?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit architecto fugiat quis suscipit eius et voluptas iure enim nostrum.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Can I change through coaching?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit architecto fugiat quis suscipit eius et voluptas iure enim nostrum.",
      isOpen: false,
    },
    {
      id: 4,
      question: "How often do we meet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit architecto fugiat quis suscipit eius et voluptas iure enim nostrum.",
      isOpen: false,
    },
    {
      id: 4,
      question: "How often do we meet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit architecto fugiat quis suscipit eius et voluptas iure enim nostrum.",
      isOpen: false,
    },
    {
      id: 6,
      question: "How often do we meet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit architecto fugiat quis suscipit eius et voluptas iure enim nostrum.",
      isOpen: false,
    },
    {
      id: 7,
      question: "How often do we meet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit architecto fugiat quis suscipit eius et voluptas iure enim nostrum.",
      isOpen: false,
    },
  ];

  const [query, setQuery] = useState(query_arr.slice(0, 4));
  const [showMore, setShowMore] = useState(false);

  const handleOpenClose = (id) => {
    const newQuery = query.map((item) => {
      if (item.id === id) {
        item.isOpen = !item.isOpen;
      }
      return item;
    });
    setQuery(newQuery);
    console.log(query);
  };
  const handleToggleData = () => {
    if (showMore) {
      setQuery(query_arr.slice(0, 4));
      setShowMore(!showMore);
    } else {
      setQuery(query_arr);
      setShowMore(!showMore);
    }
  };

  return (
    <div className={style.querySection}>
      <div className={style.querySection_heading}>
        <h2>Good to know</h2>
        <p>Everything you need to know about the my services.</p>
      </div>
      <div className={style.querySection_card}>
        {query.map((item) => {
          return (
            <div className={style.querySection_card_item} key={item.id}>
              <div className={style.querySection_card_item_top}>
                <div className={style.questions}>
                  <h3>{item.question}</h3>
                  <span onClick={() => handleOpenClose(item.id)}>
                    {item.isOpen ? (
                      <AiOutlineMinusCircle />
                    ) : (
                      <AiOutlinePlusCircle />
                    )}
                  </span>
                </div>
                {item.isOpen && <p>{item.answer}</p>}
              </div>
            </div>
          );
        })}

        <button
          className={style.querySection_card_btn}
          onClick={handleToggleData}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
        <div className={style.querySection_moreDetails}>
            <h2>Still have questions?</h2>
            <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <CustomButton text="Get in touch"/>
        </div>
    </div>
  );
};

export default QuerySection;
