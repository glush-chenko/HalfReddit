import React, {ChangeEvent, useCallback, useState} from 'react';
import {useAppDispatch} from "../../../app/hooks";
import iconsSearchPng from "../../../assets/icons-search.png";
import iconClosePng from "../../../assets/icons-close.png";
import styles from "./header-search.module.css";
import {IconButton} from "../../../components/generic/icon-button/icon-button";
import {loadCardsData} from "../../../utils/reddit-api";

export const HeaderSearch = () => {
    const dispatch = useAppDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const onSearchChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }, []);

    const onSearchClearHandler = useCallback(() => {
        setSearchTerm("")
    }, []);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchTerm && dispatch(loadCardsData({prefixed: "", search: `${searchTerm}&`}))
        }
    }, [searchTerm, dispatch]);

    const handlerOnClick = useCallback(() => {
        searchTerm && dispatch(loadCardsData({prefixed: "", search: `${searchTerm}&`}))
    }, [searchTerm, dispatch]);

    return (
        <div className={styles.searchContainer}>
            <IconButton
                srcImage={iconsSearchPng}
                className={styles.iconsSearch}
                onClickHandle={handlerOnClick}
            />
            <input
                className={styles.search}
                type="text"
                value={searchTerm}
                onChange={onSearchChangeHandler}
                onKeyDown={handleKeyDown}
                placeholder="Search Reddit"
            />
            {searchTerm.length > 0 && (
                <IconButton
                    srcImage={iconClosePng}
                    onClickHandle={onSearchClearHandler}
                    className={styles.searchClear}
                />
            )}
        </div>
    );
}