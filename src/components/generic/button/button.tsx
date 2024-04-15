import React from 'react';
import styles from "./button.module.css";
import classNames from "classnames";
import defaultImageSub from "../../../assets/subreddit-default.png";
import {Image} from "../image/image";

interface ButtonProps {
    text?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void,
    disabled?: boolean,
    pathD?: string,
    srcImage?: string,
    className?: string,
}

export const Button = (props: ButtonProps) => {
    const {pathD, onClick, disabled, text, srcImage, className} = props;

    return (
        <>
            <button
                className={classNames(className, styles.button)}
                type="button"
                onClick={onClick}
                disabled={disabled}
            >
                {pathD && (
                    <svg fill="currentColor" height="20" viewBox="0 0 20 20" width="20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d={pathD}/>
                    </svg>
                )}
                {srcImage && (
                    <Image img={srcImage} defaultImage={defaultImageSub}/>
                    // <img alt="icon" src={srcImage} />
                )}
                {!srcImage && !pathD && (<Image img={defaultImageSub}/>)}
                {text}
            </button>
        </>
    )
}