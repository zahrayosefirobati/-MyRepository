import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
const cardsData = [
  { image: "./images/img_1.png", name: "غذای اصلی" },
  { image: "./images/img_2.png", name: "پیش غذا" },
  { image: "./images/img_3.png", name: "دسر" },
  { image: "./images/img_4.png", name: "نوشیدنی" },
];

function Cards() {
  return (
    <div className={styles.cards}>
      {cardsData.map((card) => {
        return <Card key={card.name} image={card.image} name={card.name} />;
      })}
    </div>
  );
}

export default Cards;
