import React from 'react';
import {Card} from "../../../components/card/card";
import styles from "./all-cards.module.css";

const fakeDataCards = [
    {
        authorImgUrl: "dfdfjghfjgh",
        id: "jfjdkls678jh",
        title: "new bird in my life!",
        author: "Meril3434",
        permalink: "44444444",
        url: "https://i.redd.it/75udx995f1qc1.png",
        numComments: 546,
        createdDate: new Date(1711179500 * 1000),
        ups: 1974
    },
    {
        authorImgUrl: "dfdfjghfjgh",
        id: "j4343fgsffjh",
        title: "cats love too mach!",
        author: "Hevt565",
        permalink: "44444444",
        url: "https://i.redd.it/f8q0d5q8x1qc1.png",
        numComments: 890,
        createdDate: new Date(1711185604 * 1000),
        ups: 3434
    },
    {
        authorImgUrl: "dfdfjghfjgh",
        id: "2323kjdjkfh",
        title: "welcome to club, dude!",
        author: "NoNo404",
        permalink: "44444444",
        url: "https://i.redd.it/jf5c2rxr91qc1.jpeg",
        numComments: 267,
        createdDate: new Date(1711130450 * 1000),
        ups: 8745
    }
]

export const AllCards = () => {

    return (
        <div className={styles.allCards}>
            <ul>
                {fakeDataCards.map((card) => (
                    <li key={card.id}>
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
                    </li>
                ))}
            </ul>
        </div>
    )
}