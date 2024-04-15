import React, {useCallback, useState} from 'react';
import {Upvotes} from "./upvotes/upvotes";
import {getTimeDifference} from "../../utils/date-utils";
import styles from "./card.module.css";
import {Image} from "../generic/image/image";
import defaultImage from "../../assets/defaultProfileReddit.png";
import {CommentsCounter} from "./comments-counter/comments-counter";
import {ImageWithBlurredBackground} from "../generic/image-background/image-background";
import {Comments} from "../../features/comments/comments";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {loadCommentsData, selectCommentsById} from "../../utils/reddit-api";

interface CardProps {
    authorImg?: string,
    id: string,
    title: string,
    author: string,
    urlImg: string,
    createdDate: number,
    permalinkComments: string,
    numComments: number,
    ups: number
}

export const Card = (props: CardProps) => {
    const {
        id, author, urlImg, title,
        createdDate, authorImg, ups, numComments, permalinkComments
    } = props;
    const [imageError, setImageError] = useState(false);
    const dispatch = useAppDispatch();
    const comments = useAppSelector(selectCommentsById(id));

    const handleDivClick = useCallback(() => {
        dispatch(loadCommentsData({permalink: permalinkComments, id: id}));
    }, [dispatch]);

    const handleOnError = () => {
        setImageError(true);
    }

    return (
        <div className={styles.cardContainer} key={id}>
            <div className={styles.cardUpvotes}>
                <Upvotes upvotesNum={ups}/>
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.dataCard}>
                    <h3>{title}</h3>
                    {!imageError && <ImageWithBlurredBackground alt="image" src={urlImg} onError={handleOnError}/>}
                </div>
                <div className={styles.cardFooter}>
                    {authorImg && <Image img={authorImg} defaultImage={defaultImage}/>}
                    <p>{author}</p>
                    <p>{getTimeDifference(new Date(createdDate))}</p>
                    <CommentsCounter numComments={numComments} onClick={handleDivClick}/>
                </div>
                {comments && comments.length && <Comments comments={comments}/>}
            </div>
        </div>
    );
}