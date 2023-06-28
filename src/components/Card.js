import React from 'react';
import styles from './Card.module.css';

function Card(image, name) {
    return (
        <div className={styles.card}>
            <img src={image} alt='menu'/>
            <button>{name}</button>
        </div>
    )
}

export default Card;
