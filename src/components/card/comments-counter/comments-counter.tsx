import React from 'react';
import {Button} from "../../generic/button/button";
import styles from "./comments-counter.module.css";
import {formatNumber} from "../../../utils/format-number-utils";
import {ICON_COMMENTS} from "../../../assets/svg-pathes/common";

interface CommentsCounterProps {
    numComments: number,
    onClick: () => void,
}

export const CommentsCounter = (props: CommentsCounterProps) => {
    const {numComments, onClick} = props;

    return (
        <div className={styles.commentsContainer} onClick={onClick}>
            <Button pathD={ICON_COMMENTS}/>
            <p>{formatNumber(numComments, false)}</p>
        </div>
    )
}