import React from 'react';
import {ISubreddit} from "../../../../types/subreddit.interface";
import styles from "./subreddit.module.css"
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {isImageLoading, setImageLoading} from "./subreddit-slice";
import defaultImageSub from "../../../../assets/subreddit-default.png"

export const Subreddit = (props: ISubreddit) => {
    const {nameSub, imgSub, counterMembers} = props;
    const dispatch = useAppDispatch();
    const loading = useAppSelector(isImageLoading);

    const handleOnErrorImage = () => {
        dispatch((setImageLoading(false)));
    }

    const handleOnLoadImage = () => {
        dispatch((setImageLoading(false)));
    }

    return (
        <div className={styles.subredditContainer}>
            <div className={styles.imgSub}>
                <img
                    src={loading ? imgSub : defaultImageSub}
                    onError={handleOnErrorImage}
                    onLoad={handleOnLoadImage}
                    alt={nameSub}
                />
            </div>
            <div className={styles.subreddit}>
                <p className={styles.subredditName}>{nameSub}</p>
                <p className={styles.subredditMembers}>{counterMembers} members</p>
            </div>
        </div>
    )
}