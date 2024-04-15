import React from 'react';
import styles from "./upvotes.module.css";
import {formatNumber} from "../../../utils/format-number-utils";
import {IconButton} from "../../generic/icon-button/icon-button";
import {ICON_DOWN, ICON_UP} from "../../../assets/svg-pathes/common";

interface UpvotesProps {
    upvotesNum: number,
    direction?: "row" | "column",
}

export const Upvotes = (props: UpvotesProps) => {
    const {upvotesNum, direction= "column"} = props;

    return (
        <div className={styles.container} style={{flexDirection: direction}}>
            <IconButton pathD={ICON_UP} className={styles.iconsUp}/>
            <p className={styles.upvotesP}>{formatNumber(upvotesNum, false)}</p>
            <IconButton pathD={ICON_DOWN} className={styles.iconsDown}/>
        </div>
    )
}