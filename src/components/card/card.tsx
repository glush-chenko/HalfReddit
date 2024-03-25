import React from 'react';
import {Upvotes} from "../generic/upvotes/upvotes";
import {getTimeDifference} from "../../utils/date-utils";
import styles from "./card.module.css";
import {Comments} from "../../features/comments/comments";
import {ImageUtils} from "../../utils/image-utils";

interface CardProps {
    authorImg: string,
    id: string,
    title: string,
    author: string,
    urlImg: string,
    createdDate: Date,
    permalinkComments: string,
    numComments: number,
    ups: number
}

export const Card = (props: CardProps) => {
    const {
        id, author, urlImg, title,
        createdDate, authorImg, permalinkComments, ups, numComments
    } = props;

    return (
        <div className={styles.cardContainer} key={id}>
            <div className={styles.cardUpvotes}>
                <Upvotes upvotesNum={ups}/>
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.dataCard}>
                    <h3>{title}</h3>
                    {urlImg && <img src={urlImg} alt="image-content"/>}
                </div>
                <div className={styles.cardFooter}>
                    {authorImg && <ImageUtils img={authorImg} author={author}/>}
                    <p>{author}</p>
                    <p>{getTimeDifference(createdDate)}</p>
                    <Comments commentsUrl={permalinkComments} numComments={numComments}/>
                </div>
            </div>
        </div>
    );
}