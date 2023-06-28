import React from 'react';
import styles from './Banner.module.css';
import banner from './images/Slider.jpg';
// import sllips from '../assets/icons/ellips1.svg';
// import sllips_2 from '../assets/icons/ellips2.svg';
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
            {/* <div className={styles.go_down}>
                    <div className={styles.ax}></div>
                    { <div>
                       <img src={sllips_2} alt='sllips'/>
                       <img src={sllips} alt='sllips'/>
                       <img src={sllips} alt='sllips'/>
                       <img src={sllips} alt='sllips'/>
                       <img src={sllips} alt='sllips'/>
                       <img src={sllips} alt='sllips'/>
                    </div>
                    }
            </div>  */}
        </main>     
    )
}

export default Banner;
