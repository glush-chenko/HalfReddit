import React, {Fragment, useEffect} from 'react';
import {Card} from "../../../components/card/card";
import styles from "./content.module.css";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {
    loadCardsData,
    selectRedditData
} from "../../../utils/reddit-api";
import {
    SCREEN_NAMES,
    selectActiveScreen, selectActiveSubreddit,
    selectActiveTopic, TOPIC_REDDITS
} from "../nav/nav-top-section/nav-top-section-slice";

export const Content = () => {
    const dispatch = useAppDispatch();
    const activeScreen = useAppSelector(selectActiveScreen);
    const activeTopic = useAppSelector(selectActiveTopic);
    const activeSubreddit = useAppSelector(selectActiveSubreddit);
    const redditData = useAppSelector(selectRedditData);

    useEffect(() => {
        switch (activeScreen) {
            case SCREEN_NAMES.HOME:
                dispatch(loadCardsData("r/home"));
                break;
            case SCREEN_NAMES.POPULAR:
                dispatch(loadCardsData("r/popular"));
                break;
            case SCREEN_NAMES.TOPIC:
                if (activeTopic) {
                    dispatch(loadCardsData(TOPIC_REDDITS[activeTopic]));
                }
                break;
            case SCREEN_NAMES.SUBREDDIT:
                dispatch(loadCardsData(activeSubreddit));
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
                </Fragment>
            ))}
        </div>
    )
}