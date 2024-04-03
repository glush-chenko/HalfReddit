import React from 'react';
import {AllCards} from "./content/all-cards";
import styles from "./main.module.css"
import {Subreddits} from "./right-section/subreddits/subreddits";
import {Nav} from "./nav/nav";

export const Main = () => {
    return (
        <main>
            <Nav />
            <div className={styles.allContentContainer}>
                <AllCards/>
                <Subreddits />
            </div>
        </main>
    )
}