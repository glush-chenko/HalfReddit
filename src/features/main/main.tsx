import React from 'react';
import {AllCards} from "./content/all-cards";
import styles from "./main.module.css"
import {Subreddits} from "./right-section/subreddits/subreddits";

export const Main = () => {
    return (
        <main>
            <div className={styles.allContentContainer}>
                <AllCards/>
                <Subreddits />
            </div>
        </main>
    )
}