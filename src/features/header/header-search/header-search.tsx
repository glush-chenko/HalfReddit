import React, {ChangeEvent, useCallback} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import iconsSearchPng from "../../../assets/icons-search.png";
import iconClosePng from "../../../assets/icons-close.png";
import {
    clearSearchTerm,
    selectSearchTerm,
    setSearchTerm,
} from "./header-search-slice";
import styles from "./header-search.module.css";
import {IconButton} from "../../../components/generic/icon-button/icon-button";

export const HeaderSearch = () => {
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector(selectSearchTerm);

    const onSearchChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(e.target.value));
    }, [dispatch]);

    const onSearchTermClearHandler = useCallback(() => {
        dispatch(clearSearchTerm());
    }, [dispatch]);

    return (
        <div className={styles.searchContainer}>
            <IconButton srcImage={iconsSearchPng} className={styles.iconsSearch}/>
            <input
                className={styles.search}
                type="text"
                value={searchTerm}
                onChange={onSearchChangeHandler}
                placeholder="Search Reddit"
            />
            {searchTerm.length > 0 && (
                <IconButton srcImage={iconClosePng} onClickHandle={onSearchTermClearHandler} className={styles.searchClear}/>
            )}
        </div>
    );
}