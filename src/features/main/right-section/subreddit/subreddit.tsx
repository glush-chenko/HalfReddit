import React, {useCallback} from 'react';
import {ISubreddit} from "../../../../types/subreddit.interface";
import styles from "./subreddit.module.css"
import defaultImageSub from "../../../../assets/subreddit-default.png"
import {formatNumber} from "../../../../utils/format-number-utils";
import {Image} from "../../../../components/generic/image/image";
import {addRecent} from "../../nav/recent/recent-slice";
import {useAppDispatch} from "../../../../app/hooks";

interface ISubredditProps extends ISubreddit {
    onClick: (prefixed: string) => void,
    item?: ISubreddit
}

export const Subreddit = (props: ISubredditProps) => {
    const {imgSub, subscribers, prefixed, onClick, item} = props;
    const dispatch = useAppDispatch();

    const handleClick = useCallback(() => {
        onClick(prefixed);
        dispatch(addRecent(item));
    }, [dispatch]);

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