import React from 'react';
import loading from "../../../assets/loading-animation.svg"
import styles from "./loading.module.css"

export const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <img src={loading} alt="animation"/>
        </div>
    )
}