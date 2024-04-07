import React, {Fragment, useEffect} from 'react';
import {Card} from "../../../components/card/card";
import styles from "./content.module.css";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {getHome, getPopular, getSubreddit, getTopic, selectRedditData} from "../../../utils/reddit-api";
import {Divider} from "../../../components/generic/divider/divider";
import {
    SCREEN_NAMES,
    selectActiveScreen, selectActiveSubreddit,
    selectActiveTopic
} from "../nav/nav-top-section/nav-top-section-slice";

export const Content = () => {
    const dispatch = useAppDispatch();
    const activeScreen = useAppSelector(selectActiveScreen);
    const activeTopic = useAppSelector(selectActiveTopic);
    const activeSubreddit = useAppSelector(selectActiveSubreddit);
    const redditData = useAppSelector(selectRedditData);
    console.log(redditData)

    useEffect(() => {
        switch (activeScreen) {
            case SCREEN_NAMES.HOME:
                dispatch(getHome());
                break;
            case SCREEN_NAMES.POPULAR:
                dispatch(getPopular());
                break;
            case SCREEN_NAMES.TOPIC:
                if (activeTopic) {
                    dispatch(getTopic(activeTopic));
                }
                break;
            case SCREEN_NAMES.SUBREDDIT:
                dispatch(getSubreddit(activeSubreddit));
                break;
        }
    }, [dispatch, activeScreen, activeTopic, activeSubreddit]);

    return (
        <div className={styles.allCards}>
            {redditData.map((card) => (
                <Fragment key={card.id}>
                    <Card
                        id={card.id}
                        author={card.author}
                        title={card.title}
                        createdDate={card.createdDate}
                        urlImg={card.url}
                        authorImg={card.authorImgUrl}
                        permalinkComments={card.permalink}
                        numComments={card.numComments}
                        ups={card.ups}
                    />
                    <Divider />
                    {/*<div className={styles.divider}/>*/}
                </Fragment>
            ))}
        </div>
    )
}