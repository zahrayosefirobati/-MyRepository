import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from './images/Logo.png';
import { Search } from './icons/search';
import { Shop } from './icons/shop';
import { User } from './icons/user';
import { ArrowDown } from './icons/arrowDown';
import { Menu } from './icons/menu';
import { Close } from './icons/close';

function Navbar() {
    const[isOpen, setIsOpen] = useState(false);

    const clickHandler = () => {
        setIsOpen (!isOpen)
    }
    return (

        <header className={styles.container}>
            <div onClick={clickHandler}>
                <Menu />
            </div>
            { !isOpen ?
            <div className={styles.Navbar}> 
                <div className={styles.navIcon}>
                    <Close />
                    <img className={styles.logo} src={Logo} alt='logo'/>
                </div>
                    <nav>
                        <ul className={styles.mainNav}>
                            <li><Link to='/' className={styles.textLink}>صفحه اصلی</Link></li>
                            <li className={styles.moremenu}>
                                <Link to='/' className={styles.textLink}>شعبه</Link>
                                    <ArrowDown />
                                    <ul className={styles.listmenu1}>
                                        <li><Link to='/' className={styles.textmenu}>اکباتان</Link></li>
                                        <li><Link to='/' className={styles.textmenu}>چالوس</Link></li>
                                        <li><Link to='/' className={styles.textmenu}>اقدسیه</Link></li>
                                        <li><Link to='/' className={styles.textmenu}>ونک</Link></li>
                                    </ul>    
                            </li>
                            <li className={styles.moremenu}>
                                <Link to='/' className={styles.textLink}>منو</Link>
                                        <ArrowDown />
                                        <ul className={styles.listmenu2}>
                                            <li><Link to='/' className={styles.textmenu}>غذای اصلی</Link></li>
                                            <li><Link to='/' className={styles.textmenu}>پیش غذا</Link></li>
                                            <li><Link to='/' className={styles.textmenu}>دسر</Link></li>
                                            <li><Link to='/' className={styles.textmenu}>نوشیدنی</Link></li>
                                        </ul> 
                            </li>
                            <li><Link to='/' className={styles.textLink}>اعطای نمایندگی</Link></li>
                            <li><Link to='/' className={styles.textLink}>درباره ما</Link></li>
                            <li><Link to='/' className={styles.textLink}>تماس با ما</Link></li>
                        </ul>
                    </nav>
                    </div> : ""
                    }
                    
            <div className={styles.icons}>
                <button>
                    <Search />
                </button>
                <button>
                    <Shop />
                </button>
                <button className={styles.userIcon}>
                    <div className={styles.user}>
                        <User />
                    </div>
                    <div className={styles.arrow}>
                        <ArrowDown />
                    </div>
                </button>
            </div>
        </header>

    )
}

export default Navbar;
