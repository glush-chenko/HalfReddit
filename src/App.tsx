import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./features/header/header";
import {Main} from "./features/main/main";
import {useAppDispatch} from "./app/hooks";
import {setScreenWidth} from "./screen-slice";


function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleResize = () => {
            dispatch(setScreenWidth(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);

    return (
        <>
            <Header/>
            <Main/>
        </>
    );
}

export default App;
