import React from 'react';
import {IComment} from "../../types/comment.interface";
import {Comment} from "../../components/card/comment/comment";
import styles from "./comments.module.css"

interface CommentsProps {
    comments: IComment[]
}

export const Comments = (props: CommentsProps) => {
    const {comments} = props;

    return (
        <div className={styles.comments}>
            {comments.map((comment) => {
                return (
                    <Comment
                        key={comment.id}
                        author={comment.author}
                        text={comment.text}
                        ups={comment.ups}
                        createdDate={comment.createdDate}
                        replies={comment.replies}
                    />
                )
            })}
        </div>
    )
}