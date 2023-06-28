import React from 'react';
import Card from './Card';
import styles from './Cards.module.css';
import ghaza_1 from './images/img_1.png';
import ghaza_2 from './images/img_2.png';
import ghaza_3 from './images/img_3.png';
import ghaza_4 from './images/img_4.png';

function Cards() {
    return (
        <div className={styles.cards}>
            <Card image={ghaza_1} name='غذای اصلی' />
            <Card image={ghaza_2} name='پیش غذا' />
            <Card image={ghaza_3} name='دسر' />
            <Card image={ghaza_4} name='نوشیدنی' />
        </div>
       
    )
}

export default Cards;
