import React from 'react';

interface CommentsCounterProps {
    counter: number
}

export const CommentsCounter = ({counter}: CommentsCounterProps) => {
    return <p>{counter}</p>
}