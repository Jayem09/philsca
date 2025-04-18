import React from 'react';
import './QuizReview.css';

const QuizReview = ({ quizQuestions, userAnswers, onClose }) => {
    return (
        <div className="quiz-review-container">
            <button className="close-button" onClick={onClose}>
                Close Review
            </button>
            <h2>Review Answers</h2>
            {quizQuestions.map((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.answer;
                return (
                    <div key={index} className="review-question">
                        <div className="question">{question.question}</div>
                        <div className={isCorrect ? 'correct-answer' : 'incorrect-answer'}>
                            Your answer: {userAnswer || "No answer given"}
                        </div>
                        {!isCorrect && (
                            <div className="correct-answer">
                                Correct answer: {question.answer}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default QuizReview;
