import React, { useState, useEffect } from 'react';

function QuizLeaderboardSystem() {
    const [currentView, setCurrentView] = useState('quiz'); // 'quiz', 'leaderboard', 'admin'
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminPassword, setAdminPassword] = useState('');
    const [studentName, setStudentName] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
    const [quizActive, setQuizActive] = useState(false);
    const [showResults, setShowResults] = useState(false);

    // Empty questions array - start with no default questions
    const [questions, setQuestions] = useState([]);

    // Leaderboard data - In a real app, this would be stored in a database
    const [leaderboard, setLeaderboard] = useState([
        { name: "Alice Johnson", score: 45, time: "2024-06-22 07:30", rank: 1 },
        { name: "Bob Smith", score: 40, time: "2024-06-22 08:15", rank: 2 },
        { name: "Carol Davis", score: 35, time: "2024-06-22 09:00", rank: 3 },
        { name: "David Wilson", score: 30, time: "2024-06-22 07:45", rank: 4 },
        { name: "Emma Brown", score: 25, time: "2024-06-22 08:30", rank: 5 }
    ]);

    const [newQuestion, setNewQuestion] = useState({
        question: '',
        options: ['', '', '', ''],
        correct: '',
        points: 10
    });

    // Timer effect
    useEffect(() => {
        let interval;
        if (quizActive && timeLeft > 0 && questions.length > 0) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0 && quizActive) {
            handleNextQuestion();
        }
        return () => clearInterval(interval);
    }, [quizActive, timeLeft, questions.length]);

    const startQuiz = () => {
        if (!studentName.trim()) {
            alert('Please enter your name first!');
            return;
        }
        if (questions.length === 0) {
            alert('No questions available! Please contact the admin to add questions.');
            return;
        }
        setQuizActive(true);
        setCurrentQuestionIndex(0);
        setScore(0);
        setTimeLeft(30);
        setQuizCompleted(false);
        setShowResults(false);
        setSelectedAnswer('');
    };

    const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNextQuestion = () => {
        // Check if current question exists and has the correct answer
        const currentQuestion = questions[currentQuestionIndex];
        if (currentQuestion && selectedAnswer === currentQuestion.correct) {
            setScore(score + currentQuestion.points);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer('');
            setTimeLeft(30);
        } else {
            completeQuiz();
        }
    };

    const completeQuiz = () => {
        setQuizActive(false);
        setQuizCompleted(true);
        setShowResults(true);

        // Calculate final score including the last question if answered correctly
        let finalScore = score;
        const lastQuestion = questions[currentQuestionIndex];
        if (lastQuestion && selectedAnswer === lastQuestion.correct) {
            finalScore += lastQuestion.points;
        }

        // Add to leaderboard
        const newEntry = {
            name: studentName,
            score: finalScore,
            time: new Date().toLocaleString(),
            rank: 0
        };

        const updatedLeaderboard = [...leaderboard, newEntry];
        updatedLeaderboard.sort((a, b) => b.score - a.score);
        updatedLeaderboard.forEach((entry, index) => {
            entry.rank = index + 1;
        });

        setLeaderboard(updatedLeaderboard);
        setScore(finalScore); // Update the score state for display
    };

    const handleAdminLogin = () => {
        if (adminPassword === 'admin123') {
            setIsAdmin(true);
            setCurrentView('admin');
        } else {
            alert('Invalid password!');
        }
    };

    const handleAddQuestion = () => {
        // Validate all fields are filled
        if (!newQuestion.question.trim()) {
            alert('Please enter a question!');
            return;
        }

        if (!newQuestion.options.every(opt => opt.trim())) {
            alert('Please fill in all options!');
            return;
        }

        if (!newQuestion.correct.trim()) {
            alert('Please specify the correct answer!');
            return;
        }

        // Check if the correct answer matches one of the options
        if (!newQuestion.options.some(opt => opt.trim() === newQuestion.correct.trim())) {
            alert('The correct answer must match exactly one of the options!');
            return;
        }

        const questionToAdd = {
            id: Date.now(), // Use timestamp as unique ID
            question: newQuestion.question.trim(),
            options: newQuestion.options.map(opt => opt.trim()),
            correct: newQuestion.correct.trim(),
            points: newQuestion.points || 10
        };

        setQuestions([...questions, questionToAdd]);
        setNewQuestion({
            question: '',
            options: ['', '', '', ''],
            correct: '',
            points: 10
        });
        alert('Question added successfully!');
    };

    const handleDeleteQuestion = (id) => {
        if (window.confirm('Are you sure you want to delete this question?')) {
            setQuestions(questions.filter(q => q.id !== id));
        }
    };

    const resetQuiz = () => {
        setQuizActive(false);
        setQuizCompleted(false);
        setCurrentQuestionIndex(0);
        setSelectedAnswer('');
        setScore(0);
        setTimeLeft(30);
        setShowResults(false);
        setStudentName('');
    };

    // Styles
    const containerStyle = {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    };

    const cardStyle = {
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
    };

    const headerStyle = {
        background: 'linear-gradient(135deg, #ff6b6b, #feca57)',
        padding: '30px',
        textAlign: 'center',
        color: 'white'
    };

    const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '10px'
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #e9ecef'
    };

    const buttonStyle = (active = false) => ({
        padding: '12px 24px',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        backgroundColor: active ? '#007bff' : '#6c757d',
        color: 'white',
        fontSize: '14px'
    });

    const contentStyle = {
        padding: '30px'
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        border: '2px solid #e9ecef',
        borderRadius: '8px',
        fontSize: '16px',
        marginBottom: '10px',
        boxSizing: 'border-box'
    };

    const questionCardStyle = {
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '15px',
        marginBottom: '20px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    };

    const optionStyle = (selected = false) => ({
        display: 'block',
        width: '100%',
        padding: '15px',
        margin: '10px 0',
        border: `2px solid ${selected ? '#007bff' : '#e9ecef'}`,
        borderRadius: '10px',
        backgroundColor: selected ? '#e3f2fd' : 'white',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'all 0.3s ease',
        color: selected ? '#000' : '#333' // Change text color based on selection
    });

    const timerStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: timeLeft < 10 ? '#dc3545' : '#28a745',
        textAlign: 'center',
        marginBottom: '20px'
    };

    const leaderboardStyle = {
        backgroundColor: 'white',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    };

    const leaderboardRowStyle = (rank) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
        borderBottom: '1px solid #e9ecef',
        backgroundColor: rank === 1 ? '#fff3cd' : rank === 2 ? '#e2e8f0' : rank === 3 ? '#f8d7da' : 'white'
    });

    const renderQuizView = () => (
        <div style={contentStyle}>
            {!quizActive && !showResults && (
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '30px', color: '#333' }}>Quiz System</h2>
                    {questions.length === 0 ? (
                        <div style={questionCardStyle}>
                            <h3 style={{ color: '#dc3545', marginBottom: '20px' }}>No Questions Available</h3>
                            <p style={{ color: '#666', marginBottom: '20px' }}>
                                There are currently no questions in the system.
                                Please contact the administrator to add questions before taking the quiz.
                            </p>
                            <button
                                onClick={() => setCurrentView('admin')}
                                style={buttonStyle(true)}
                            >
                                Go to Admin Panel
                            </button>
                        </div>
                    ) : (
                        <>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                style={inputStyle}
                            />
                            <button
                                onClick={startQuiz}
                                style={{
                                    ...buttonStyle(true),
                                    fontSize: '18px',
                                    padding: '15px 30px',
                                    marginTop: '20px'
                                }}
                            >
                                Start Quiz
                            </button>
                            <p style={{ marginTop: '20px', color: '#666' }}>
                                Answer {questions.length} questions.<br />
                                You have 30 seconds per question. Good luck!
                            </p>
                        </>
                    )}
                </div>
            )}

            {quizActive && questions.length > 0 && questions[currentQuestionIndex] && (
                <div>
                    <div style={timerStyle}>
                        Time Left: {timeLeft}s
                    </div>

                    <div style={questionCardStyle}>
                        <h3 style={{ marginBottom: '20px', color: '#333' }}>
                            Question {currentQuestionIndex + 1} of {questions.length}
                        </h3>
                        <p style={{ fontSize: '18px', marginBottom: '30px', lineHeight: '1.6' }}>
                            {questions[currentQuestionIndex].question}
                        </p>

                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(option)}
                                style={optionStyle(selectedAnswer === option)}
                            >
                                {option}
                            </button>
                        ))}

                        <button
                            onClick={handleNextQuestion}
                            disabled={!selectedAnswer}
                            style={{
                                ...buttonStyle(true),
                                marginTop: '20px',
                                opacity: selectedAnswer ? 1 : 0.5
                            }}
                        >
                            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                        </button>
                    </div>
                </div>
            )}

            {showResults && (
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ color: '#28a745', marginBottom: '20px' }}>Quiz Completed!</h2>
                    <div style={questionCardStyle}>
                        <h3>Your Results</h3>
                        <p style={{ fontSize: '24px', color: '#007bff', margin: '20px 0' }}>
                            Score: {score} / {questions.length * 10}
                        </p>
                        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                            Percentage: {questions.length > 0 ? ((score / (questions.length * 10)) * 100).toFixed(1) : 0}%
                        </p>
                        <button onClick={resetQuiz} style={{ ...buttonStyle(true), marginRight: '10px' }}>
                            Take Quiz Again
                        </button>
                        <button onClick={() => setCurrentView('leaderboard')} style={buttonStyle(true)}>
                            View Leaderboard
                        </button>
                    </div>
                </div>
            )}
        </div>
    );

    const renderLeaderboard = () => (
        <div style={contentStyle}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
                🏆 Real-Time Leaderboard
            </h2>
            <div style={leaderboardStyle}>
                <div style={{
                    ...leaderboardRowStyle(0),
                    backgroundColor: '#007bff',
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                    <span>Rank</span>
                    <span>Name</span>
                    <span>Score</span>
                    <span>Time</span>
                </div>
                {leaderboard.map((entry, index) => (
                    <div key={index} style={leaderboardRowStyle(entry.rank)}>
                        <span style={{ fontWeight: 'bold' }}>
                            {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : `#${entry.rank}`}
                        </span>
                        <span>{entry.name}</span>
                        <span style={{ fontWeight: 'bold' }}>{entry.score}</span>
                        <span style={{ fontSize: '14px', color: '#666' }}>{entry.time}</span>
                    </div>
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button onClick={() => setCurrentView('quiz')} style={buttonStyle(true)}>
                    Take Quiz
                </button>
            </div>
        </div>
    );

    const renderAdminView = () => (
        <div style={contentStyle}>
            {!isAdmin ? (
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '30px', color: '#333' }}>Admin Login</h2>
                    <input
                        type="password"
                        placeholder="Enter admin password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        style={inputStyle}
                    />
                    <button onClick={handleAdminLogin} style={buttonStyle(true)}>
                        Login
                    </button>
                    <p style={{ marginTop: '20px', color: '#666', fontSize: '14px' }}>
                        Demo password: admin123
                    </p>
                </div>
            ) : (
                <div>
                    <h2 style={{ marginBottom: '30px', color: '#333' }}>Admin Panel</h2>

                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ marginBottom: '20px' }}>Add New Question</h3>
                        <div style={questionCardStyle}>
                            <input
                                type="text"
                                placeholder="Question"
                                value={newQuestion.question}
                                onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                                style={inputStyle}
                            />
                            {newQuestion.options.map((option, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    placeholder={`Option ${index + 1}`}
                                    value={option}
                                    onChange={(e) => {
                                        const newOptions = [...newQuestion.options];
                                        newOptions[index] = e.target.value;
                                        setNewQuestion({ ...newQuestion, options: newOptions });
                                    }}
                                    style={inputStyle}
                                />
                            ))}
                            <input
                                type="text"
                                placeholder="Correct Answer (must match one of the options exactly)"
                                value={newQuestion.correct}
                                onChange={(e) => setNewQuestion({ ...newQuestion, correct: e.target.value })}
                                style={inputStyle}
                            />
                            <input
                                type="number"
                                placeholder="Points"
                                min="1"
                                value={newQuestion.points}
                                onChange={(e) => setNewQuestion({ ...newQuestion, points: parseInt(e.target.value) || 10 })}
                                style={inputStyle}
                            />
                            <button onClick={handleAddQuestion} style={buttonStyle(true)}>
                                Add Question
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '20px' }}>
                            Manage Questions ({questions.length} total)
                        </h3>
                        {questions.length === 0 ? (
                            <div style={questionCardStyle}>
                                <p style={{ textAlign: 'center', color: '#666' }}>
                                    No questions added yet. Add your first question above!
                                </p>
                            </div>
                        ) : (
                            questions.map((question, index) => (
                                <div key={question.id} style={{
                                    ...questionCardStyle,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start'
                                }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ marginBottom: '10px' }}>
                                            <strong>Q{index + 1}:</strong> {question.question}
                                        </div>
                                        <div style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>
                                            <strong>Options:</strong> {question.options.join(', ')}
                                        </div>
                                        <div style={{ fontSize: '14px', color: '#28a745' }}>
                                            <strong>Correct:</strong> {question.correct} ({question.points} points)
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteQuestion(question.id)}
                                        style={{
                                            ...buttonStyle(),
                                            backgroundColor: '#dc3545',
                                            marginLeft: '10px'
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <div style={headerStyle}>
                    <h1 style={titleStyle}>Quiz Leaderboard System</h1>
                    <p>Real-time competitive learning platform</p>
                </div>

                <nav style={navStyle}>
                    <button
                        onClick={() => setCurrentView('quiz')}
                        style={buttonStyle(currentView === 'quiz')}
                    >
                        Take Quiz
                    </button>
                    <button
                        onClick={() => setCurrentView('leaderboard')}
                        style={buttonStyle(currentView === 'leaderboard')}
                    >
                        Leaderboard
                    </button>
                    <button
                        onClick={() => setCurrentView('admin')}
                        style={buttonStyle(currentView === 'admin')}
                    >
                        Admin Panel
                    </button>
                </nav>

                {currentView === 'quiz' && renderQuizView()}
                {currentView === 'leaderboard' && renderLeaderboard()}
                {currentView === 'admin' && renderAdminView()}
            </div>
        </div>
    );
}

export default QuizLeaderboardSystem;