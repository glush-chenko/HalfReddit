import React from 'react';
import {Subreddit} from "../subreddit/subreddit";
import {ISubreddit} from "../../../../types/subreddit.interface";
import styles from "./subreddits.module.css"

const fakeDataSubreddits: ISubreddit[] = [
    {
        id: "34765762",
        nameSub: "roviolirgs",
        imgSub: "gfkjdfgkdfhg",
        counterMembers: 343343223
    },
    {
        id: "dhfdj367623",
        nameSub: "cats original too mach",
        imgSub: "gfh3435jh",
        counterMembers: 1002324
    },
    {
        id: "sfg672616",
        nameSub: "roviolirgs",
        imgSub: "ferjerjhd4",
        counterMembers: 23438881
    }
]

export const Subreddits = () => {
    return (
        <div className={styles.subredditsContainer}>
            <div className={styles.subreddit}>
                <h2>Subreddits</h2>
                <ul role="tablist">
                    {fakeDataSubreddits.map((subreddit) => (
                        <li key={subreddit.id} role="tab">
                            <Subreddit
                                counterMembers={subreddit.counterMembers}
                                imgSub={subreddit.imgSub}
                                nameSub={subreddit.nameSub}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}