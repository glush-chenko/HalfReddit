import React, {useMemo} from 'react';
import {
    ICON_ANIME,
    ICON_ART,
    ICON_BUSINESS,
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
    setActiveTopic,
    TOPIC_NAMES
} from "../nav-top-section/nav-top-section-slice";
import {selectScreenSizes, toggleNav} from "../../../../screen-slice";


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
        name: TOPIC_NAMES.ANIME,
        icon: ICON_ANIME,
        active: false,
        text: "Anime"
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
    const screenSizes = useAppSelector(selectScreenSizes);

    const navTopics = useMemo(() => {
        return topicsArray.map((topic) => {
            return {
                ...topic,
                active: activeScreen === SCREEN_NAMES.TOPIC && activeTopic === topic.name,
                onClickFunc: () => {
                    dispatch(setActiveTopic(topic.name));
                    if (!screenSizes.isExtraLarge) {
                        dispatch(toggleNav());
                    }
                }
            }
        })
    }, [dispatch, activeScreen, activeTopic, screenSizes.isExtraLarge]);

    return (
        <NavSection navArray={navTopics} text="TOPICS" />
    )
}