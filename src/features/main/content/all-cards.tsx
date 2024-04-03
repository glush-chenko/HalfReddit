import React, {Fragment, useEffect} from 'react';
import {Card} from "../../../components/card/card";
import styles from "./all-cards.module.css";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {fetchRedditData, getPopular} from "../../../utils/reddit-api";
import {Divider} from "../../../components/generic/divider/divider";
import {SCREEN_NAMES, selectActiveScreen} from "../nav/nav-top-section/nav-top-section-slice";
import {ICard} from "../../../types/card.interface";

const fakeDataCards: ICard[] = [
    {
        authorImgUrl: "dfdfjghfjgh",
        id: "jfjdkls678jh",
        title: "new bird in my life!",
        author: "Meril3434",
        permalink: "44444444",
        url: "https://i.redd.it/75udx995f1qc1.png",
        numComments: 546,
        createdDate: 1711179500 * 1000,
        ups: 1974
    },
    {
        authorImgUrl: "dfdfjghfjgh",
        id: "j4343fgsffjh",
        title: "cats love too mach!",
        author: "Hevt565",
        permalink: "44444444",
        url: "https://i.redd.it/f8q0d5q8x1qc1.png",
        numComments: 3890,
        createdDate: 1711185604 * 1000,
        ups: 3434
    },
    {
        authorImgUrl: "dfdfjghfjgh",
        id: "2323kjdjkfh",
        title: "welcome to club, dude!",
        author: "NoNo404",
        permalink: "44444444",
        url: "https://i.redd.it/jf5c2rxr91qc1.jpeg",
        numComments: 1267,
        createdDate: 1711130450 * 1000,
        ups: 8745
    }
]

export const AllCards = () => {
    const dispatch = useAppDispatch();
    const activeScreen = useAppSelector(selectActiveScreen);

    useEffect(() => {
        switch (activeScreen) {
            case SCREEN_NAMES.HOME:
                //TODO
                // dispatch(getHome());
                break;
            case SCREEN_NAMES.POPULAR:
                dispatch(getPopular());
                break;
            // case SCREEN_NAMES.SUBREDDIT:
            //     //TODO get active subreddit (id || name)
            //     //dispatch(getSubreddit());
            //     dispatch(getPopular());
            //     break;

        }
    }, [dispatch, activeScreen]);

    return (
        <div className={styles.allCards}>
            {fakeDataCards.map((card) => (
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