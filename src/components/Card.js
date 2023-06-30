import React from 'react';
import styles from './Card.module.css';

function Card(image, name) {
    return (
        <div className={styles.card}>
            <img src={image}/>
            <button>{name.name}</button>
        </div>
    )
}

export default Card;
