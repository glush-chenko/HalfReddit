import React from 'react';
import {Button} from "../../generic/button/button";
import styles from "./upvotes.module.css";
import {formatNumber} from "../../../utils/format-number-utils";
import {IconButton} from "../../generic/icon-button/icon-button";
import {ICON_DOWN, ICON_UP} from "../../../assets/svg-pathes/common";

interface UpvotesProps {
    upvotesNum: number
}

export const Upvotes = (props: UpvotesProps) => {
    const {upvotesNum} = props;

    return (
        <>
            {/*<div className={`${styles.icons}`}>*/}
                <IconButton pathD={ICON_UP} className={styles.iconsUp}/>
                {/*<Button pathD={ICON_UP} />*/}
            {/*</div>*/}
            {/*<IconButton srcImage={} />*/}
            <p className={styles.upvotesP}>{formatNumber(upvotesNum, false)}</p>
            {/*<div className={`${styles.icons}`}>*/}
                <IconButton pathD={ICON_DOWN} className={styles.iconsDown}/>
                {/*<Button pathD={ICON_DOWN}/>*/}
            {/*</div>*/}
        </>
    )
}