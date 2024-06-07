import React from 'react';
import questions from './QuestionData';

const RandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

    return <p>{randomQuestion}</p>
};

export default RandomQuestion;