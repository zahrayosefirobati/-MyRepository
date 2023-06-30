import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import ghaza_1 from "./images/img_1.png";
import ghaza_2 from "./images/img_2.png";
import ghaza_3 from "./images/img_3.png";
import ghaza_4 from "./images/img_4.png";

const cardsData = [
  { image: { ghaza_1 }, name: "غذای اصلی" },
  { image: { ghaza_2 }, name: "پیش غذا" },
  { image: { ghaza_3 }, name: "دسر" },
  { image: { ghaza_4 }, name: "نوشیدنی" },
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
