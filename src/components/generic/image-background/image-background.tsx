import React, {useCallback, useState} from 'react';
import styles from "./image-background.module.css";
import {Skeleton} from "../skeleton/skeleton";

interface ImageWithBlurredBackgroundProps {
    src: string,
    alt: string,
    onError: () => void,
}

export const ImageWithBlurredBackground = (props: ImageWithBlurredBackgroundProps) => {
    const {src, alt, onError} = props;
    const [loading, setLoading] = useState(true);

    const handlerOnLoad = useCallback(() => {
        setLoading(false);
    }, [])

    return (
        <div className={styles.imageContainer}>
            <img
                className={styles.mainImage}
                src={src}
                alt={alt}
                onError={onError}
                onLoad={handlerOnLoad}
                style={{display: loading ? "none" : "block"}}
            />
            <div
                className={styles.blurredBackground}
                style={{
                    backgroundImage: `url(${src})`,
                    display: loading ? "none" : "block"
                }}
            />
            {loading && <Skeleton card={true}/>}
        </div>
    );
};