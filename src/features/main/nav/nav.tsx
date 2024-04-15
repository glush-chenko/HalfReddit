import React from 'react';
import {NavTopSection} from "./nav-top-section/nav-top-section";
import styles from "./nav.module.css";
import {Recent} from "./recent/recent";
import {Topics} from "./topics/topics";
import {useAppSelector} from "../../../app/hooks";
import {selectShowNav, selectScreenWidth} from "../../../screen-slice";
import classNames from "classnames";

export const Nav = () => {
    const screenWidth = useAppSelector(selectScreenWidth);
    const showNav = useAppSelector(selectShowNav);

    return (
        <>
            {(screenWidth > 1200 || showNav) &&
                (
                    <div
                        className={classNames(styles.leftSectionContainer, {
                            [styles.leftSectionContainerSmallScreen]: showNav
                        })}
                    >
                        <NavTopSection/>
                        <Recent/>
                        <Topics/>
                    </div>
                )
            }
        </>
    )
}
