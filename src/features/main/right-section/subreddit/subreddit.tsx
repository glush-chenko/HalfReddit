import React from 'react';
import {ISubreddit} from "../../../../types/subreddit.interface";
import styles from "./subreddit.module.css"
import defaultImageSub from "../../../../assets/subreddit-default.png"
import {formatNumber} from "../../../../utils/format-number-utils";
import {Image} from "../../../../components/generic/image/image";

export const Subreddit = (props: ISubreddit) => {
    const {nameSub, imgSub, counterMembers} = props;

    return (
        <div className={styles.subredditContainer} tabIndex={0}>
            <div className={styles.imgSub}>
                {imgSub && <Image img={imgSub} defaultImage={defaultImageSub}/>}
            </div>
            <div className={styles.subreddit}>
                <p className={styles.subredditName} title={nameSub}>{nameSub}</p>
                <p className={styles.subredditMembers}>{formatNumber(counterMembers, true)} members</p>
            </div>
        </div>
    )
}