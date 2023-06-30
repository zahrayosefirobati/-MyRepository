import React from "react";
import styles from "./Txt.module.css";
import { Link } from "react-router-dom";
import { Copy } from './icons/copy';
import { Trash } from './icons/trash';
import { Folder } from './icons/folder';
import SignUp from "./SignUp";

function Txt() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div>
          <p>دسترسی آسان</p>
          <ul>
            <li>
              <Link className={styles.link} to="/">
                پرسش های متداول
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/">
                قوانین ترخینه
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/">
                حریم خصوصی
              </Link>
            </li>
            <li>
              <Copy />
              <Trash />
              <Folder />
              <Link to="/"></Link>
            </li>
          </ul>
        </div>
        <div>
          <p>شعبه های ترخینه</p>
          <ul>
            <li>
              <Link className={styles.link} to="/">
                شعبه اکباتان
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/">
                شعبه چالوس
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/">
                شعبه ونک
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/">
                شعبه اقدسیه
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <SignUp />
    </div>
  );
}

export default Txt;
