import React, {useCallback, useEffect} from 'react';
import {Subreddit} from "../subreddit/subreddit";
import {ISubreddit} from "../../../../types/subreddit.interface";
import styles from "./subreddits.module.css"
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {getSubreddits, selectSubreddits} from "../../../../utils/reddit-api";
import {setActiveSubreddit} from "../../nav/nav-top-section/nav-top-section-slice";

export const Subreddits = () => {
    const dispatch = useAppDispatch();
    const subreddits = useAppSelector(selectSubreddits);

    useEffect(() => {
        dispatch(getSubreddits());
    }, [dispatch]);

    const handleSubredditsClick = useCallback((prefixed: string)=> {
        dispatch(setActiveSubreddit(prefixed));
    }, [dispatch])
    console.log(subreddits)


    return (
        <div className={styles.subredditsContainer}>
            <div className={styles.subreddit}>
                <h2>Subreddits</h2>
                <ul role="tablist">
                    {subreddits.map((subreddit: ISubreddit) => (
                        <li key={subreddit.id} role="tab">
                            <Subreddit
                                subscribers={subreddit.subscribers}
                                imgSub={subreddit.imgSub}
                                prefixed={subreddit.prefixed}
                                onClick={handleSubredditsClick}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}