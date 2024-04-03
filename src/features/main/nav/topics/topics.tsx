import React, {useMemo} from 'react';
import {
    ICON_ART,
    ICON_BUSINESS, ICON_CELEBRITY,
    ICON_CRYPTO,
    ICON_GAMING,
    ICON_SPORTS,
    ICON_TELEVISION
} from "../../../../assets/svg-pathes/common";
import {INavButton, NavSection} from "../nav-section/nav-section";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {
    SCREEN_NAMES,
    selectActiveScreen,
    selectActiveTopic,
    setActiveScreen, setActiveTopic,
    TOPIC_NAMES
} from "../nav-top-section/nav-top-section-slice";

// name: string,
//     path?: string,
//     pathD?: boolean,
//     pathTrue?: string,
//     pathFalse?: string,
//     onClickFunc?: (e: React.MouseEvent<HTMLElement>) => void,

const topicsArray: INavButton<TOPIC_NAMES>[] = [
    {
        name: TOPIC_NAMES.GAMING,
        icon: ICON_GAMING,
        active: false,
        text: "Gaming"
    },
    {
        name: TOPIC_NAMES.SPORTS,
        icon: ICON_SPORTS,
        active: false,
        text: "Sports"
    },
    {
        name: TOPIC_NAMES.BUSINESS,
        icon: ICON_BUSINESS,
        active: false,
        text: "Business"
    },
    {
        name: TOPIC_NAMES.CRYPTO,
        icon: ICON_CRYPTO,
        active: false,
        text: "Crypto"
    },
    {
        name: TOPIC_NAMES.TELEVISION,
        icon: ICON_TELEVISION,
        active: false,
        text: "Television"
    },
    {
        name: TOPIC_NAMES.CELEBRITY,
        icon: ICON_CELEBRITY,
        active: false,
        text: "Celebrity"
    },
    {
        name: TOPIC_NAMES.ART,
        icon: ICON_ART,
        active: false,
        text: "Art"
    }
]

export const Topics = () => {
    const dispatch = useAppDispatch();
    const activeScreen = useAppSelector(selectActiveScreen);
    const activeTopic = useAppSelector(selectActiveTopic);

    const navTopics = useMemo(() => {
        return topicsArray.map((topic) => {
            return {
                ...topic,
                active: activeScreen === SCREEN_NAMES.TOPIC && activeTopic === topic.name,
                onClickFunc: () => {
                    dispatch(setActiveTopic(topic.name));
                }
            }
        })
    }, [dispatch, activeScreen, activeTopic]);

    // for (const topicObj of TopicsArray) {
    //     const topic: keyof typeof SCREEN_NAMES = topicObj.name as keyof typeof SCREEN_NAMES;
    //
    //     topicObj.active = activeScreen === SCREEN_NAMES[topic];
    //     topicObj.onClickFunc = () => {
    //         dispatch(setActiveScreen(SCREEN_NAMES[topic]));
    //     }
    // }

    return (
        // <div className={styles.topicsContainer}>
        //     <p>TOPICS</p>
        //     {TopicsArray.map((topic) => (
        //         <Button text={topic.name} pathD={topic.path}/>
        //     ))}
        // </div>
        <NavSection navArray={navTopics} text="TOPICS" />
    )
}