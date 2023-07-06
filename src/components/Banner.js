import React from 'react';
import styles from './Banner.module.css';
import banner from './images/Slider.jpg';

 

function Banner() {
    return (
        <main>
            <div className={styles.container}>
                <img src={banner} alt='banner'/>
                <div className={styles.textcontainer}>
                    <h1>تجربه غذای سالم وگیاهی به سبک ترخینه</h1>
                    <button>سفارش آنلاین غذا</button>
                </div>
            </div>
           
        </main>     
    )
}

export default Banner;
