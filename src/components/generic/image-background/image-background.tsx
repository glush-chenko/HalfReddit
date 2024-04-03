import React from 'react';
import styles from "./image-background.module.css";

interface ImageWithBlurredBackgroundProps {
    src: string,
    alt: string
}

export const ImageWithBlurredBackground = (props: ImageWithBlurredBackgroundProps) => {
    const {src, alt} = props;

    return (
        <div className={styles.imageContainer}>
            <img className={styles.mainImage} src={src} alt={alt}/>
            <div
                className={styles.blurredBackground}
                style={{backgroundImage: `url(${src})`}}
            />
        </div>
    );
};