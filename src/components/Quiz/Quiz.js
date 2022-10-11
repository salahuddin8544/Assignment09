import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Quiz = () => {
    const quiz = useLoaderData();
    const question = quiz.data.questions;
    console.log(question);
    return (
        <div>
            <h3>Quiz of {quiz.data.name}</h3>
        </div>
    );
};

export default Quiz;