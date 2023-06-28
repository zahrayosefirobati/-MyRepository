import React from 'react';
import styles from './Carts.module.css';
import Cart from './Cart';
import image_1 from './images/image11.png';
import image_2 from './images/image22.png';
import image_3 from './images/image33.png';
import image_4 from './images/image44.png';
import { ArrowLeft } from './icons/arrowLeft';

function Carts() {
    return (
        <div className={styles.container}>
            <Cart image={image_1} name='شعبه ونک' paragraph='میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶' dokmeh='صفحه شعبه' icon={<ArrowLeft />} />
            <Cart image={image_2} name='شعبه اقدسیه' paragraph='خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸' dokmeh='صفحه شعبه' icon={<ArrowLeft />} />
            <Cart image={image_3} name='شعبه چالوس' paragraph='چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی' dokmeh='صفحه شعبه' icon={<ArrowLeft />} />
            <Cart image={image_4} name='شعبه اکباتان' paragraph='شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم' dokmeh='صفحه شعبه' icon={<ArrowLeft />} />

        </div>
    )
}

export default Carts;
