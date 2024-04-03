import React, {useMemo} from 'react';
import {
    ICON_HOME,
    ICON_HOME_ACTIVE,
    ICON_POPULAR,
    ICON_POPULAR_ACTIVE
} from "../../../../assets/svg-pathes/common";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {SCREEN_NAMES, selectActiveScreen, setActiveScreen} from "./nav-top-section-slice";
import {INavButton, NavSection} from "../nav-section/nav-section";

const topArray: INavButton<SCREEN_NAMES>[] = [
    {
        name: SCREEN_NAMES.HOME,
        activeIcon: ICON_HOME_ACTIVE,
        icon: ICON_HOME,
        active: false,
        text: "Home"
    },
    {
        name: SCREEN_NAMES.POPULAR,
        activeIcon: ICON_POPULAR_ACTIVE,
        icon: ICON_POPULAR,
        active: false,
        text: "Popular"
    },
]

export const NavTopSection = () => {
    const dispatch = useAppDispatch();
    const activeScreen = useAppSelector(selectActiveScreen);

    const navButtons = useMemo(() => {
        return topArray.map((navButton) => {
            return {
                ...navButton,
                active: activeScreen === navButton.name,
                onClickFunc: () => {
                    dispatch(setActiveScreen(navButton.name));
                }
            }
        })
    }, [dispatch, activeScreen]);

    return (
        <NavSection navArray={navButtons}/>
    )
}