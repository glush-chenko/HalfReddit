import React from 'react';
import {Upvotes} from "./upvotes/upvotes";
import {getTimeDifference} from "../../utils/date-utils";
import styles from "./card.module.css";
import {Image} from "../generic/image/image";
import defaultImage  from "../../assets/defaultProfileReddit.png";
import {CommentsCounter} from "./comments-counter/comments-counter";

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
        createdDate, authorImg, ups, numComments
    } = props;

    return (
        <div className={styles.cardContainer} key={id}>
            <div className={styles.cardUpvotes}>
                <Upvotes upvotesNum={ups}/>
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.dataCard}>
                    <h3>{title}</h3>
                    {urlImg && <img src={urlImg} alt="post"/>}
                </div>
                <div className={styles.cardFooter}>
                    {authorImg && <Image img={authorImg} defaultImage={defaultImage}/>}
                    <p>{author}</p>
                    <p>{getTimeDifference(createdDate)}</p>
                    <CommentsCounter numComments={numComments}/>
                </div>
            </div>
        </div>
    );
}