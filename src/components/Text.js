import React from 'react';
import styles from './Text.module.css';
import { ArrowLeft } from './icons/arrowLeft';
import { User } from './icons/user';
import { Chart } from './icons/chart';
import { Home } from './icons/home';
import { Schedule } from './icons/schedule';

function Text() {
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
                    <div className="arrowLeft">
                         <ArrowLeft />
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.container_icon}>
            <div className={styles.item_1}>
                <User />
                <p>پرسنلی مجرب و حرفه‌ای</p>
            </div>
            <div className={styles.item_2}>
                <Chart />
                <p>کیفیت بالای غذاها</p>
            </div>
            <div className={styles.item_3}>
                <Home />
                <p>محیطی دلنشین و آرام</p>
            </div>
            <div className={styles.item_4}>
                <Schedule />
                <p>منوی متنوع</p>
            </div>

        </div>
    </div>   
    )
}

export default Text;
