import React from 'react';
import {useAppDispatch} from "../../../../app/hooks";
import {INavButton, NavSection} from "../nav-section/nav-section";
import {SCREEN_NAMES} from "../nav-top-section/nav-top-section-slice";


// name: string,
//     path?: string,
//     pathD?: boolean,
//     pathTrue?: string,
//     pathFalse?: string,
//     onClickFunc?: (e: React.MouseEvent<HTMLElement>) => void,

const RecentArray: INavButton<any>[] = [
    {
        name: SCREEN_NAMES.SUBREDDIT,
        text: "r/example",
        img: "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png",
    },
]

//{tabName} :{tabName: string}

export const Recent = () => {
    const dispatch = useAppDispatch();

    return (
        <NavSection navArray={RecentArray} text="RECENT" />
    )
}