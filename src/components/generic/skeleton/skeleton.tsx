import React from "react";
import styles from "./skeleton.module.css"
import classNames from "classnames";

interface SkeletonProps {
    card: boolean
}

export const Skeleton = (props: SkeletonProps) => {
    const {card} = props;

    return (<div
        className={classNames(styles.skeleton, {
            [styles.skeletonSubreddit]: !card
        })}
    ></div>)
}