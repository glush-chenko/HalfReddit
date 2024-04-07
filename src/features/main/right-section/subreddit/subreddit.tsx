import React, {useCallback} from 'react';
import {ISubreddit} from "../../../../types/subreddit.interface";
import styles from "./subreddit.module.css"
import defaultImageSub from "../../../../assets/subreddit-default.png"
import {formatNumber} from "../../../../utils/format-number-utils";
import {Image} from "../../../../components/generic/image/image";

interface ISubredditProps extends ISubreddit {
    onClick: (prefixed: string) => void
}

export const Subreddit = (props: ISubredditProps) => {
    const {imgSub, subscribers, id, prefixed, onClick} = props;

    const handleClick = useCallback(() => {
        onClick(prefixed)
    }, []);

    return (
        <div className={styles.subredditContainer} tabIndex={0} onClick={handleClick}>
            <div className={styles.imgSub}>
                <Image img={imgSub} defaultImage={defaultImageSub}/>
            </div>
            <div className={styles.subreddit}>
                <p className={styles.subredditName} title={prefixed}>{prefixed}</p>
                <p className={styles.subredditMembers}>{formatNumber(subscribers, true)} members</p>
            </div>
        </div>
    )
}