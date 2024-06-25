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
import {Loading} from "../../../components/generic/loading/loading";

export const Content = () => {
    const dispatch = useAppDispatch();
    const activeScreen = useAppSelector(selectActiveScreen);
    const activeTopic = useAppSelector(selectActiveTopic);
    const activeSubreddit = useAppSelector(selectActiveSubreddit);
    const redditData = useAppSelector(selectRedditData);

    useEffect(() => {
        switch (activeScreen) {
            case SCREEN_NAMES.HOME:
                dispatch(loadCardsData({prefixed: "r/home", search: ""}));
                break;
            case SCREEN_NAMES.POPULAR:
                dispatch(loadCardsData({prefixed: "r/popular", search: ""}));
                break;
            case SCREEN_NAMES.TOPIC:
                if (activeTopic) {
                    dispatch(loadCardsData({prefixed: TOPIC_REDDITS[activeTopic], search: ""}));
                }
                break;
            case SCREEN_NAMES.SUBREDDIT:
                dispatch(loadCardsData({prefixed: activeSubreddit, search: ""}));
                break;
        }
    }, [dispatch, activeScreen, activeTopic, activeSubreddit]);

    return (
        <div className={styles.allCards}>
            {!redditData.length ? <Loading /> : (
                <>
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
                </>
            )}
        </div>
    )
}