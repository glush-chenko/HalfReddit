import React, {useCallback} from 'react';
import styles from "./main.module.css"
import {Subreddits} from "./right-section/subreddits/subreddits";
import {Nav} from "./nav/nav";
import {Content} from "./content/content"
import {Snackbar} from "../../components/generic/snackbar/snackbar";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectScreenSizes, selectShowNav, toggleNav} from "../../screen-slice";
export const Main = () => {
    const dispatch = useAppDispatch();
    const showNav = useAppSelector(selectShowNav);
    const screenSizes = useAppSelector(selectScreenSizes);

    const handlerOnClick = useCallback(() => {
        if (showNav && !screenSizes.isExtraLarge) {
            dispatch(toggleNav(false));
        }
    }, [dispatch, showNav, screenSizes.isExtraLarge])

    return (
        <main>
            <Nav />
            {(showNav && !screenSizes.isExtraLarge) && <div className={styles.overlay} onClick={handlerOnClick}/>}
            <div className={styles.allContentContainer}>
                <Content />
                <Subreddits />
                <Snackbar text="The data is not available at the moment, please try again" />
            </div>
        </main>
    )
}