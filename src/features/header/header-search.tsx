import React, {ChangeEvent, useCallback} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import iconsSearchPng from "../../assets/icons-search.png";
import iconClosePng from "../../assets/icons-close.png";
import {
    clearSearchTerm,
    selectSearchTerm,
    setSearchTerm,
} from "./header-search-slice";
import styles from "./header-search.module.css";

export const HeaderSearch = () => {
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector(selectSearchTerm);

    const onSearchChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(e.target.value));
    }, []);

    const onSearchTermClearHandler = useCallback(() => {
        dispatch(clearSearchTerm());
    }, []);

    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.search}
                type="text"
                value={searchTerm}
                onChange={onSearchChangeHandler}
                placeholder="Search Reddit"
            />
            {/*<span className={styles.imageContainer}>*/}
            {/*    <img alt="search-icon" src={iconsSearchPng}/>*/}
            {/*</span>*/}
            {searchTerm.length > 0 && (
                <button
                    onClick={onSearchTermClearHandler}
                    type="button"
                    className={styles.searchClearButton}
                >
                    <img className={styles.closeIcon} src={iconClosePng} alt="search-clear-button"/>
                </button>
            )}
        </div>
    );
}