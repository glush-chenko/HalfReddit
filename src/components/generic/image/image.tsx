import React, {useCallback, useState} from 'react';
import {Skeleton} from "../skeleton/skeleton";

interface ImageUtilsProps {
    img: string,
    defaultImage?: string,
    click?: boolean,
}

export const Image = (props: ImageUtilsProps) => {
    const {img, defaultImage} = props;
    const [imageError, setImageError] = useState(false);
    const [imageLoad, setImageLoad] = useState(true);

    const handleImageError = useCallback(() => {
        setImageError(true);
    }, []);

    const handleOnLoad = useCallback(() => {
        setImageLoad(false);
    }, []);

    return (
        <>
            <img
                src={imageError ? defaultImage : img}
                alt="default"
                onError={handleImageError}
                onLoad={handleOnLoad}
                style={{display: imageLoad ? "none" : "block"}}
            />
            {imageLoad && <Skeleton card={false}/>}
        </>
    );
}