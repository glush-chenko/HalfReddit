import React, {useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {NavSection} from "../nav-section/nav-section";
import {
    SCREEN_NAMES,
    selectActiveScreen, selectActiveSubreddit, setActiveScreen,
    setActiveSubreddit
} from "../nav-top-section/nav-top-section-slice";
import {addRecent, selectRecent} from "./recent-slice";
import {toggleNav} from "../../../../screen-slice";

export const Recent = () => {
    const dispatch = useAppDispatch();
    const activeScreen = useAppSelector(selectActiveScreen);
    const activeSubreddit = useAppSelector(selectActiveSubreddit);
    const recentArray = useAppSelector(selectRecent);


    const navRecent = useMemo(() => {
        return recentArray.map((nav: any) => {
            return {
                name: nav.prefixed,
                text: nav.prefixed,
                img: nav.imgSub,

                active: activeScreen === SCREEN_NAMES.SUBREDDIT && activeSubreddit === nav.prefixed,
                onClickFunc: () => {
                    dispatch(addRecent(nav))
                    dispatch(setActiveScreen(SCREEN_NAMES.SUBREDDIT));
                    dispatch(setActiveSubreddit(nav.prefixed));

                    dispatch(toggleNav());
                },
            }
        })
    }, [recentArray, activeScreen, activeSubreddit]);

    return (
        <NavSection navArray={navRecent} text="RECENT"/>
    )
}