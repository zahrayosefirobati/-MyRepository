import React from "react";
import styles from "./Cart.module.css";
import { ArrowLeft } from "./icons/arrowLeft";


function Cart({image, name, paragraph, dokmeh, icon}) {
    return (
        <div className={styles.container}>
            <img src={require(`${image}`)} alt={name}/>
            <h3>{name}</h3>
            <p>{paragraph}</p>
            <div className={styles.items}>
               <div className='dookmeh'>
                    <span>{dokmeh}</span>
                    <div className="icon-arrow">
                        <ArrowLeft/>
                    </div>    
               </div>

            </div>
        </div>
    )
}

export default Cart;
