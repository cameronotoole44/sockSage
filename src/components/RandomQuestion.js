import React from 'react';
import questions from './QuestionData';

const RandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

    return <p className="text-lg text-gray-700">{randomQuestion}</p>
};

export default RandomQuestion;

