import React from 'react';
import styles from "./main.module.css"
import {Subreddits} from "./right-section/subreddits/subreddits";
import {Nav} from "./nav/nav";
import {Content} from "./content/content"
export const Main = () => {
    return (
        <main>
            <Nav />
            <div className={styles.allContentContainer}>
                <Content />
                <Subreddits />
            </div>
        </main>
    )
}