import React from "react";
import styles from "./Carts.module.css";
import Cart from "./Cart";
const cartsData = [
  {
    image: "./images/image11.png",
    name: "شعبه ونک",
    paragraph: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    dokmeh: "صفحه شعبه",
  },
  {
    image: "./images/image22.png",
    name: "شعبه اقدسیه",
    paragraph: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    dokmeh: "صفحه شعبه",
  },
  {
    image: "./images/image33-nam.png",
    name: "شعبه چالوس",
    paragraph:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    dokmeh: "صفحه شعبه",
  },
  {
    image: "./images/image44.png",
    name: "شعبه اکباتان",
    paragraph: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    dokmeh: "صفحه شعبه",
  },
];

function Carts() {
  return (
    <div className={styles.container}>
      {cartsData.map((cart) => {
        return (
          <Cart
            key={cart.name}
            image={cart.image}
            name={cart.name}
            dokmeh={cart.dokmeh}
            paragraph={cart.paragraph}
          />
        );
      })}
    </div>
  );
}

export default Carts;
