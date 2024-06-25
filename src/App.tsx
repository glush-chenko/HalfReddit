import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./features/header/header";
import {Main} from "./features/main/main";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {selectScreenSizes, setScreenWidth, toggleNav} from "./screen-slice";

function App() {
    const dispatch = useAppDispatch();
    const screenSizes = useAppSelector(selectScreenSizes);

    useEffect(() => {
        const handleResize = () => {
            dispatch(setScreenWidth(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);

    useEffect(() => {
        if (!screenSizes.isExtraLarge) {
            dispatch(toggleNav(false));
        } else {
            dispatch(toggleNav(true));
        }
    }, [screenSizes.isExtraLarge]);

    return (
        <>
            <Header/>
            <Main/>
        </>
    );
}

export default App;
