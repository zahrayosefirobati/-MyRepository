import React from "react";
import styles from "./Cart.module.css";
import { ArrowLeft } from "./icons/arrowLeft";


function Cart(image, name, paragraph, dokmeh, icon) {
    return (
        <div className={styles.container}>
            <img src={image} alt='restoran'/>
            <h3>{name}</h3>
            <p>{paragraph}</p>
            <div className={styles.items}>
               <div className='dookmeh'>
                <span>
                    {dokmeh}
                </span>
                    
                    {icon}
                   
               </div>

            </div>
        </div>
    )
}

export default Cart;
