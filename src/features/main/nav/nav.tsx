import React from 'react';
import {NavTopSection} from "./nav-top-section/nav-top-section";
import styles from "./nav.module.css";
import {Divider} from "../../../components/generic/divider/divider";
import {Recent} from "./recent/recent";
import {Topics} from "./topics/topics";

export const Nav = () => {
    return (
        <div className={styles.leftSectionContainer}>
            {/*<div className={styles.leftSection}></div>*/}
            <NavTopSection />
            <Recent  />
            <Topics />
            {/*<Divider />*/}
        </div>
    )
}