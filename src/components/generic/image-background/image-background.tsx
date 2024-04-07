import React from 'react';
import styles from "./image-background.module.css";

interface ImageWithBlurredBackgroundProps {
    src: string,
    alt: string,
    onError: () => void,
}

export const ImageWithBlurredBackground = (props: ImageWithBlurredBackgroundProps) => {
    const {src, alt, onError} = props;

    return (
        <div className={styles.imageContainer}>
            <img className={styles.mainImage} src={src} alt={alt} onError={onError}/>
            <div
                className={styles.blurredBackground}
                style={{backgroundImage: `url(${src})`}}
            />
        </div>
    );
};