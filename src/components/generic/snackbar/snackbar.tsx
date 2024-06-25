import React, {useEffect, useRef, useState} from "react";
import styles from "./snackbar.module.css"
import classNames from "classnames";
import {Button} from "../button/button";
import {ICON_ERROR} from "../../../assets/svg-pathes/common";
import {useAppSelector} from "../../../app/hooks";
import {selectStatus} from "../../../utils/reddit-api";

interface SnackbarProps {
    text: string,
    className?: string
}

export const Snackbar = (props: SnackbarProps) => {
    const {text, className} = props;
    const [open, setOpen] = useState(false);
    const snackbarTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    );
    const status = useAppSelector(selectStatus);


    useEffect(() => {
        if (status === "failed") {
            setOpen(true);
        }

        if (snackbarTimeoutRef.current) {
            clearTimeout(snackbarTimeoutRef.current);
        }

        snackbarTimeoutRef.current = setTimeout(() => {
            setOpen(false);
            if (snackbarTimeoutRef.current) {
                clearTimeout(snackbarTimeoutRef.current);
            }
        }, 5000);
    }, [snackbarTimeoutRef, status]);

    return (
        <>
            {open && (<div className={classNames(className, styles.snackbarShow)}>
                <div>{<Button pathD={ICON_ERROR}/>}</div>
                <div className={styles.snackbarMessage}>{text}</div>
            </div>)}
        </>
    )
}