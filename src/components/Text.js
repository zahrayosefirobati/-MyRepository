import React from 'react';
import styles from './Text.module.css';
import { ArrowLeft } from './icons/arrowLeft';
import { User } from './icons/user';
import { Chart } from './icons/chart';
import { Home } from './icons/home';
import { Schedule } from './icons/schedule';

function Text() {
    const innerStyle = {
        width: '18px',
        height: '15px',
        color: '#fff',
    }
    return (
    <div className={styles.container}>
        <div className={styles.textcontainer}>
            <h3>رستوران‌های زنجیره‌ای ترخینه</h3>
            <p>
                مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
            </p>
            <div>
                <div className={styles.buttonhandler}>
                    اطلاعات بیشتر
                    <div style= {innerStyle}>
                         <ArrowLeft />
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.container_icon}>
            <div className={styles.item_1}>
                <div className={styles.userIcon}><User /></div>
                <p>پرسنلی مجرب و حرفه‌ای</p>
            </div>
            <div className={styles.item_2}>
               <div className={styles.chartIcon}><Chart /></div> 
                <p>کیفیت بالای غذاها</p>
            </div>
            <div className={styles.item_3}>
            <div className={styles.homeIcon}><Home /></div>
                <p>محیطی دلنشین و آرام</p>
            </div>
            <div className={styles.item_4}>
            <div className={styles.scheduleIcon}><Schedule /></div>
                <p>منوی متنوع</p>
            </div>

        </div>
    </div>   
    )
}

export default Text;
