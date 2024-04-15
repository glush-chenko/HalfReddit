import React, {useCallback} from 'react';
import {HeaderSearch} from "./header-search/header-search";
import logoReddit from "../../assets/reddit-logo.png";
import styles from "./header.module.css";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectScreenWidth, toggleNav} from "../../screen-slice";
import {IconButton} from "../../components/generic/icon-button/icon-button";
import {MENU_OUTLINE} from "../../assets/svg-pathes/common";

export const Header = () => {
    const dispatch = useAppDispatch();
    const screenWidth = useAppSelector(selectScreenWidth);

    const handleOnClick = useCallback(() => {
        dispatch(toggleNav());
    }, [dispatch]);

    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                {screenWidth < 1200 && <IconButton pathD={MENU_OUTLINE} onClickHandle={handleOnClick}/>}
                <img className={styles.logo} alt="reddit-logo" src={logoReddit}/>
                {screenWidth > 960 && <p>HalfReddit</p>}
            </div>
            <div className={styles.headerSearch}>
                <HeaderSearch/>
            </div>
        </header>
    );
}