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

    // Sample quiz questions - In a real app, this would come from a database
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: "At what altitude does the temperature typically decrease by 6.5°C per kilometer?",
            options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            correct: "Troposphere",
            points: 10
        },
        {
            id: 2,
            question: "What is the standard atmospheric pressure at sea level?",
            options: ["101,325 Pa", "100,000 Pa", "98,000 Pa", "105,000 Pa"],
            correct: "101,325 Pa",
            points: 10
        },
        {
            id: 3,
            question: "How does air density change with altitude?",
            options: ["Increases", "Decreases", "Stays constant", "Fluctuates randomly"],
            correct: "Decreases",
            points: 10
        },
        {
            id: 4,
            question: "What affects the speed of sound in air?",
            options: ["Pressure only", "Temperature only", "Both pressure and temperature", "Humidity only"],
            correct: "Temperature only",
            points: 10
        },
        {
            id: 5,
            question: "At approximately what altitude does commercial aviation typically cruise?",
            options: ["5,000-8,000m", "10,000-12,000m", "15,000-18,000m", "20,000-25,000m"],
            correct: "10,000-12,000m",
            points: 10
        }
    ]);

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
        if (quizActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            handleNextQuestion();
        }
        return () => clearInterval(interval);
    }, [quizActive, timeLeft]);

    const startQuiz = () => {
        if (!studentName.trim()) {
            alert('Please enter your name first!');
            return;
        }
        setQuizActive(true);
        setCurrentQuestionIndex(0);
        setScore(0);
        setTimeLeft(30);
        setQuizCompleted(false);
        setShowResults(false);
    };

    const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === questions[currentQuestionIndex].correct) {
            setScore(score + questions[currentQuestionIndex].points);
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

        // Add to leaderboard
        const newEntry = {
            name: studentName,
            score: score + (selectedAnswer === questions[currentQuestionIndex]?.correct ? questions[currentQuestionIndex].points : 0),
            time: new Date().toLocaleString(),
            rank: 0
        };

        const updatedLeaderboard = [...leaderboard, newEntry];
        updatedLeaderboard.sort((a, b) => b.score - a.score);
        updatedLeaderboard.forEach((entry, index) => {
            entry.rank = index + 1;
        });

        setLeaderboard(updatedLeaderboard);
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
        if (newQuestion.question && newQuestion.options.every(opt => opt) && newQuestion.correct) {
            const questionToAdd = {
                id: questions.length + 1,
                ...newQuestion
            };
            setQuestions([...questions, questionToAdd]);
            setNewQuestion({
                question: '',
                options: ['', '', '', ''],
                correct: '',
                points: 10
            });
            alert('Question added successfully!');
        } else {
            alert('Please fill in all fields!');
        }
    };

    const handleDeleteQuestion = (id) => {
        setQuestions(questions.filter(q => q.id !== id));
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
        transition: 'all 0.3s ease'
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
                    <h2 style={{ marginBottom: '30px', color: '#333' }}>Atmospheric Properties Quiz</h2>
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
                        Answer {questions.length} questions about atmospheric properties.<br />
                        You have 30 seconds per question. Good luck!
                    </p>
                </div>
            )}

            {quizActive && (
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
                            Percentage: {((score / (questions.length * 10)) * 100).toFixed(1)}%
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
                                placeholder="Correct Answer"
                                value={newQuestion.correct}
                                onChange={(e) => setNewQuestion({ ...newQuestion, correct: e.target.value })}
                                style={inputStyle}
                            />
                            <input
                                type="number"
                                placeholder="Points"
                                value={newQuestion.points}
                                onChange={(e) => setNewQuestion({ ...newQuestion, points: parseInt(e.target.value) })}
                                style={inputStyle}
                            />
                            <button onClick={handleAddQuestion} style={buttonStyle(true)}>
                                Add Question
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '20px' }}>Manage Questions</h3>
                        {questions.map((question, index) => (
                            <div key={question.id} style={{
                                ...questionCardStyle,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div style={{ flex: 1 }}>
                                    <strong>Q{index + 1}:</strong> {question.question}
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
                        ))}
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