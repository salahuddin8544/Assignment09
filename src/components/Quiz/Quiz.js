import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
const Quiz = () => {
    const quiz = useLoaderData();
    const questions = quiz.data.questions;
    return (
        <div>
            <h3>Quiz of {quiz.data.name}</h3>
           {
            questions.map(singleQuiz=><SingleQuiz
            key={singleQuiz.id}
            singleQuiz ={singleQuiz}
            ></SingleQuiz>)
           }
        </div>
    );
};

export default Quiz;