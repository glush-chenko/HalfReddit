import React from "react";
import {IComment} from "../../../types/comment.interface";
import {getTimeDifference} from "../../../utils/date-utils";
import styles from "./comment.module.css"
import {Upvotes} from "../upvotes/upvotes";
import {Image} from "../../generic/image/image";
import {DEFAULTS_AVATAR} from "../../../assets/svg-pathes/common";
import parse from 'html-react-parser';

export const Comment = (props: IComment) => {
    const {text, author, ups, createdDate} = props;

    return (
        <div className={styles.commentContent}>
            <div className={styles.commentTop}>
                <Image img={DEFAULTS_AVATAR} />
                <p>{author}</p>
                <p>• {getTimeDifference(new Date(createdDate))}</p>
            </div>
            <div className={styles.commentText}>
                {parse(parse(text) as string)}
            </div>
            <div className={styles.commentUpvotes}>
                <Upvotes upvotesNum={ups} direction="row"/>
            </div>
        </div>
    )
}