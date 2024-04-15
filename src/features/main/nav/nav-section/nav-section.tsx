import React from 'react';
import classNames from "classnames";
import {Button} from "../../../../components/generic/button/button";
import styles from "./nav-section.module.css"
import {SCREEN_NAMES, TOPIC_NAMES} from "../nav-top-section/nav-top-section-slice";

export interface INavButton<T> {
    name: T,
    active?: boolean,
    activeIcon?: string,
    icon?: string,
    onClickFunc?: (e: React.MouseEvent<HTMLElement>) => void,
    img? : string,
    text?: string
}
interface NavSectionProps {
    navArray: INavButton<SCREEN_NAMES | TOPIC_NAMES | string>[],
    text?: string,
}

export const NavSection = (props: NavSectionProps) => {
    const {navArray, text} = props;

    return (
        <div className={styles.sectionContainer}>
            {text && (<p>{text}</p>)}
            {navArray.map((nav) => {
                const icon = nav.active && nav.activeIcon ? nav.activeIcon : nav.icon;

                return (
                    <div className={classNames(styles.iconsMain, {
                        [styles.active]: nav.active
                    })} key={nav.name}
                         // key={uniqueId}
                    >
                        <Button
                            text={nav.text}
                            pathD={icon}
                            srcImage={nav.img}
                            onClick={nav.onClickFunc}
                        />
                    </div>
                )
            })}
        </div>
    )
}