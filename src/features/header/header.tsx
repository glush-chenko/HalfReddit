import React from 'react';
import {HeaderSearch} from "./header-search/header-search";
import logoReddit from "../../assets/reddit-logo.png";
import styles from "./header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <img className={styles.logo} alt="reddit-logo" src={logoReddit}/>
                <p>HalfReddit</p>
            </div>
            <div className={styles.headerSearch}>
                <HeaderSearch/>
            </div>
        </header>
    );
}