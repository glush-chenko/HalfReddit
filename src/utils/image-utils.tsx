import React, {useState} from 'react';
import defaultImage  from "../assets/defaultProfileReddir.png";

interface ImageUtilsProps {
    img: string,
    author: string
}

export const ImageUtils = (props: ImageUtilsProps) => {
    const {img, author} = props
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
        //проверка, что если есть text, но нет image, то показать только text вместо картинки
        //либо проверка в slice
    };
    return (
        <img
            src={imageError ? defaultImage : img}
            alt={author}
            onError={handleImageError}
        />
    );
}