import React from 'react';
import {NavTopSection} from "./nav-top-section/nav-top-section";
import styles from "./nav.module.css";
import {Recent} from "./recent/recent";
import {Topics} from "./topics/topics";
import {useAppSelector} from "../../../app/hooks";
import {selectShowNav, selectScreenSizes} from "../../../screen-slice";
import classNames from "classnames";

export const Nav = () => {
    const showNav = useAppSelector(selectShowNav);
    const screenSizes = useAppSelector(selectScreenSizes);

    return (
        <>
            {showNav &&
                (
                    <div
                        className={classNames(styles.leftSectionContainer, {
                            [styles.leftSectionContainerSmallScreen]: showNav && !screenSizes.isExtraLarge
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
