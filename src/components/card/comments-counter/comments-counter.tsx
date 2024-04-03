import React from 'react';
import {Button} from "../../generic/button/button";
import styles from "./comments-counter.module.css";
import {formatNumber} from "../../../utils/format-number-utils";
import {ICON_COMMENTS} from "../../../assets/svg-pathes/common";

interface CommentsCounterProps {
    numComments: number
}

export const CommentsCounter = ({numComments}: CommentsCounterProps) => {
    return (
        <div className={styles.commentsContainer}>
            <Button pathD={ICON_COMMENTS} />
            <p>{formatNumber(numComments, false)}</p>
        </div>
    )
}