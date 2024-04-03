import React from 'react';
import styles from "./icon-button.module.css";
import {Button} from "../button/button";
import classNames from "classnames";

interface IconButtonProps {
    srcImage?: string,
    onClickHandle?: () => void,
    className?: string,
    pathD?: string,
    disabled?: boolean
}

export const IconButton = (props: IconButtonProps) => {
    const {srcImage, onClickHandle, className, pathD, disabled} = props;

    return (
        // <>
        //     <button
        //         className={`${styles.buttonContainer}  ${className}`}
        //         type="button"
        //         onClick={onClickHandle}
        //     >
        //         <img alt="search-icon" src={srcImage}/>
        //     </button>${styles.buttonContainer}  ${className}
        // </>
        <div className={classNames(className, styles.iconButtonContainer)}>
            <Button
                className={styles.iconButton}
                pathD={pathD}
                srcImage={srcImage}
                onClick={onClickHandle}
                disabled={disabled}
                text=""
            />
        </div>
    )
}