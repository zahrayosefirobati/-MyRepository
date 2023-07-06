import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./images/Logo.png";
import { Search } from "./icons/search";
import { Shop } from "./icons/shop";
import { User } from "./icons/user";
import { ArrowDown } from "./icons/arrowDown";

function Navbar({open}) {
  return (
    <header open={open} className={styles.container}>
      <div>
        <img src={Logo} alt="ax" />
      </div>
      <nav>
        <ul className={styles.mainNav}>
          <li>
            <Link to="/" className={styles.textLink}>
              صفحه اصلی
            </Link>
          </li>
          <li className={styles.moremenu}>
            <Link to="/" className={styles.textLink}>
              شعبه
            </Link>
            <div className={styles.arrow}>
              <ArrowDown />
            </div>
            <ul className={styles.listmenu1}>
              <li>
                <Link to="/" className={styles.textmenu}>شعبه 1</Link>
              </li>
              <li>
                <Link to="/" className={styles.textmenu}>شعبه 1</Link>
              </li>
              <li>
                <Link to="/" className={styles.textmenu}>شعبه 1</Link>
              </li>
              <li>
                <Link to="/" className={styles.textmenu}>شعبه 1</Link>
              </li>
            </ul>
          </li>
          <li className={styles.moremenu}>
            <Link to="/" className={styles.textLink}>
              منو
            </Link>
            <div className={styles.arrow}>
              <ArrowDown />
            </div>
            <ul className={styles.listmenu2}>
              <li>
                <Link to="/" className={styles.textmenu}>منو 1</Link>
              </li>
              <li>
                <Link to="/" className={styles.textmenu}>منو 1</Link>
              </li>
              <li>
                <Link to="/" className={styles.textmenu}>منو 1</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/" className={styles.textLink}>
              اعطای نمایندگی
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.textLink}>
              درباره ما
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.textLink}>
              تماس با ما
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.icons}>
        <button>
          <div className={styles.iconSearch}>
            <Search />
          </div>
        </button>
        <button>
          <div className={styles.iconShop}>
            <Shop />
          </div>
        </button>
        <button className={styles.userIcon}>
          <div className={styles.user}>
            <User />
          </div>
          <div className={styles.arrowIcon}>
            <ArrowDown />
          </div>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
