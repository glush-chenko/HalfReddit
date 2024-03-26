import React from 'react';
import styles from "./button.module.css";

interface ButtonProps {
    text?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void,
    disabled?: boolean,
    pathD?: string,
}

export const Button = (props: ButtonProps) => {
    const {pathD, onClick, disabled, text} = props;
    return (
        <>
            <button
                className={styles.button}
                type="button"
                onClick={onClick}
                disabled={disabled}
            >
                {pathD && (
                    <svg fill="currentColor" height="16" viewBox="0 0 20 20" width="16"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d={pathD}/>
                    </svg>
                )}
                {text}
            </button>
        </>
    )
}