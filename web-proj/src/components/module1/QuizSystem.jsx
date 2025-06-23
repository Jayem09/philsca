import React, { useState, useEffect } from 'react';

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDif3zH0o6Qw6ePXOs-Z7Osi5DKQMhiees",
    authDomain: "philscz.firebaseapp.com",
    databaseURL: "https://philscz-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "philscz",
    storageBucket: "philscz.firebasestorage.app",
    messagingSenderId: "687676435022",
    appId: "1:687676435022:web:ac57d257575fca876d311f",
    measurementId: "G-53B6E422TB"
};

// Firebase SDK setup
let firebaseApp = null;
let database = null;
let auth = null;

const initializeFirebase = async () => {
    try {
        // Dynamically import Firebase
        const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
        const { getDatabase, ref, push, remove, onValue, off } = await import('https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js');
        const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js');

        // Initialize Firebase if not already initialized
        if (getApps().length === 0) {
            firebaseApp = initializeApp(firebaseConfig);
        } else {
            firebaseApp = getApps()[0];
        }

        database = getDatabase(firebaseApp);
        auth = getAuth(firebaseApp);

        return { ref, push, remove, onValue, off, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };
    } catch (error) {
        console.error('Error initializing Firebase:', error);
        throw error;
    }
};

function FirebaseQuizSystem() {
    const [currentView, setCurrentView] = useState('quiz');
    const [isAdmin, setIsAdmin] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
    const [authForm, setAuthForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [authError, setAuthError] = useState('');
    const [authLoading, setAuthLoading] = useState(false);
    const [studentName, setStudentName] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
    const [quizActive, setQuizActive] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [connectionStatus, setConnectionStatus] = useState('Connecting...');

    // Real-time synced data
    const [questions, setQuestions] = useState([]);
    const [leaderboard, setLeaderboard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [firebaseReady, setFirebaseReady] = useState(false);
    const [firebaseFunctions, setFirebaseFunctions] = useState(null);

    const [newQuestion, setNewQuestion] = useState({
        question: '',
        options: ['', '', '', ''],
        correct: '',
        points: 10
    });

    // Initialize Firebase and set up listeners
    useEffect(() => {
        let questionsUnsubscribe;
        let leaderboardUnsubscribe;
        let authUnsubscribe;

        const setupFirebase = async () => {
            try {
                setConnectionStatus('Connecting...');
                setLoading(true);

                const functions = await initializeFirebase();
                setFirebaseFunctions(functions);
                setFirebaseReady(true);

                const { ref, onValue, onAuthStateChanged } = functions;

                // Set up auth state listener
                authUnsubscribe = onAuthStateChanged(auth, (user) => {
                    setCurrentUser(user);
                    setIsAdmin(!!user); // User is admin if authenticated
                    if (user && currentView === 'admin') {
                        // Keep admin view if user is logged in
                    } else if (!user && currentView === 'admin') {
                        // Redirect to quiz if user logs out
                        setCurrentView('quiz');
                    }
                });

                // Set up questions listener
                const questionsRef = ref(database, 'questions');
                questionsUnsubscribe = onValue(questionsRef, (snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        const questionsArray = Object.keys(data).map(key => ({
                            id: key,
                            ...data[key]
                        }));
                        setQuestions(questionsArray);
                    } else {
                        setQuestions([]);
                    }
                    setConnectionStatus('Connected');
                    setLoading(false);
                });

                // Set up leaderboard listener
                const leaderboardRef = ref(database, 'leaderboard');
                leaderboardUnsubscribe = onValue(leaderboardRef, (snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        const leaderboardArray = Object.keys(data).map(key => ({
                            id: key,
                            ...data[key]
                        }));

                        // Sort by score (descending) and assign ranks
                        leaderboardArray.sort((a, b) => b.score - a.score);
                        leaderboardArray.forEach((entry, index) => {
                            entry.rank = index + 1;
                        });

                        setLeaderboard(leaderboardArray);
                    } else {
                        setLeaderboard([]);
                    }
                });

            } catch (error) {
                console.error('Error setting up Firebase:', error);
                setConnectionStatus('Connection Error');
                setLoading(false);

                // Fallback to mock data for demo
                setQuestions([
                    {
                        id: 'demo1',
                        question: 'What is 2 + 2?',
                        options: ['3', '4', '5', '6'],
                        correct: '4',
                        points: 10
                    },
                    {
                        id: 'demo2',
                        question: 'What is the capital of France?',
                        options: ['London', 'Berlin', 'Paris', 'Madrid'],
                        correct: 'Paris',
                        points: 10
                    }
                ]);
                setFirebaseReady(false);
            }
        };

        setupFirebase();

        // Cleanup listeners on unmount
        return () => {
            if (questionsUnsubscribe) questionsUnsubscribe();
            if (leaderboardUnsubscribe) leaderboardUnsubscribe();
            if (authUnsubscribe) authUnsubscribe();
        };
    }, []);

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

    // Authentication functions
    const handleAuthSubmit = async (e) => {
        e.preventDefault();
        setAuthError('');
        setAuthLoading(true);

        if (!firebaseReady || !firebaseFunctions) {
            setAuthError('Firebase not connected. Please check your connection.');
            setAuthLoading(false);
            return;
        }

        const { email, password, confirmPassword } = authForm;

        if (!email || !password) {
            setAuthError('Please fill in all fields.');
            setAuthLoading(false);
            return;
        }

        if (authMode === 'signup' && password !== confirmPassword) {
            setAuthError('Passwords do not match.');
            setAuthLoading(false);
            return;
        }

        if (password.length < 6) {
            setAuthError('Password must be at least 6 characters long.');
            setAuthLoading(false);
            return;
        }

        try {
            const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = firebaseFunctions;

            if (authMode === 'signup') {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }

            // Reset form
            setAuthForm({ email: '', password: '', confirmPassword: '' });
            setCurrentView('admin');
        } catch (error) {
            console.error('Auth error:', error);
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setAuthError('Email is already registered. Please use login instead.');
                    break;
                case 'auth/invalid-email':
                    setAuthError('Invalid email address.');
                    break;
                case 'auth/user-not-found':
                    setAuthError('No account found with this email. Please sign up first.');
                    break;
                case 'auth/wrong-password':
                    setAuthError('Incorrect password.');
                    break;
                case 'auth/too-many-requests':
                    setAuthError('Too many failed attempts. Please try again later.');
                    break;
                default:
                    setAuthError('Authentication failed. Please try again.');
            }
        } finally {
            setAuthLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            if (firebaseReady && firebaseFunctions) {
                const { signOut } = firebaseFunctions;
                await signOut(auth);
                setCurrentView('quiz');
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const startQuiz = () => {
        if (!studentName.trim()) {
            alert('Please enter your name first!');
            return;
        }
        if (questions.length === 0) {
            alert('No questions available! Please wait for admin to add questions.');
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

    const completeQuiz = async () => {
        setQuizActive(false);
        setQuizCompleted(true);
        setShowResults(true);

        let finalScore = score;
        const lastQuestion = questions[currentQuestionIndex];
        if (lastQuestion && selectedAnswer === lastQuestion.correct) {
            finalScore += lastQuestion.points;
        }

        // Add to Firebase leaderboard
        const newEntry = {
            name: studentName,
            score: finalScore,
            time: new Date().toLocaleString(),
            timestamp: Date.now()
        };

        try {
            if (firebaseReady && firebaseFunctions) {
                const { ref, push } = firebaseFunctions;
                const leaderboardRef = ref(database, 'leaderboard');
                await push(leaderboardRef, newEntry);
            } else {
                // Fallback for demo mode
                console.log('Demo mode - score would be saved:', newEntry);
            }
            setScore(finalScore);
        } catch (error) {
            console.error('Error saving score:', error);
            alert('Error saving your score. Please check your connection and try again.');
        }
    };

    const handleAddQuestion = async () => {
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

        if (!newQuestion.options.some(opt => opt.trim() === newQuestion.correct.trim())) {
            alert('The correct answer must match exactly one of the options!');
            return;
        }

        const questionToAdd = {
            question: newQuestion.question.trim(),
            options: newQuestion.options.map(opt => opt.trim()),
            correct: newQuestion.correct.trim(),
            points: newQuestion.points || 10,
            createdAt: Date.now(),
            createdBy: currentUser?.email || 'admin'
        };

        try {
            if (firebaseReady && firebaseFunctions) {
                const { ref, push } = firebaseFunctions;
                const questionsRef = ref(database, 'questions');
                await push(questionsRef, questionToAdd);

                // Reset form
                setNewQuestion({
                    question: '',
                    options: ['', '', '', ''],
                    correct: '',
                    points: 10
                });

                alert('Question added successfully! All students will see it immediately.');
            } else {
                alert('Firebase not connected. Please check your connection.');
            }
        } catch (error) {
            console.error('Error adding question:', error);
            alert('Error adding question. Please check your connection and try again.');
        }
    };

    const handleDeleteQuestion = async (questionId) => {
        if (window.confirm('Are you sure you want to delete this question? This will affect all students currently taking the quiz.')) {
            try {
                if (firebaseReady && firebaseFunctions) {
                    const { ref, remove } = firebaseFunctions;
                    const questionRef = ref(database, `questions/${questionId}`);
                    await remove(questionRef);
                    alert('Question deleted successfully!');
                } else {
                    alert('Firebase not connected. Please check your connection.');
                }
            } catch (error) {
                console.error('Error deleting question:', error);
                alert('Error deleting question. Please check your connection and try again.');
            }
        }
    };

    const clearLeaderboard = async () => {
        if (window.confirm('Are you sure you want to clear the entire leaderboard? This action cannot be undone.')) {
            try {
                if (firebaseReady && firebaseFunctions) {
                    const { ref, remove } = firebaseFunctions;
                    const promises = leaderboard.map(entry => {
                        const entryRef = ref(database, `leaderboard/${entry.id}`);
                        return remove(entryRef);
                    });
                    await Promise.all(promises);
                    alert('Leaderboard cleared successfully!');
                } else {
                    alert('Firebase not connected. Please check your connection.');
                }
            } catch (error) {
                console.error('Error clearing leaderboard:', error);
                alert('Error clearing leaderboard. Please try again.');
            }
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
        overflow: 'hidden',
        position: 'relative'
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

    const statusStyle = {
        position: 'absolute',
        top: '20px',
        right: '20px',
        padding: '8px 16px',
        backgroundColor: connectionStatus === 'Connected' ? '#28a745' :
            connectionStatus === 'Connecting...' ? '#ffc107' : '#dc3545',
        color: 'white',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 'bold'
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
        color: selected ? '#000' : '#333'
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

    const loadingStyle = {
        textAlign: 'center',
        padding: '40px',
        color: '#666'
    };

    const authFormStyle = {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    };

    const errorStyle = {
        color: '#dc3545',
        backgroundColor: '#f8d7da',
        padding: '10px',
        borderRadius: '8px',
        marginBottom: '15px',
        fontSize: '14px'
    };

    if (loading) {
        return (
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <div style={headerStyle}>
                        <h1 style={titleStyle}>Real-Time Quiz System</h1>
                        <p>Multi-device synchronized learning platform</p>
                    </div>
                    <div style={loadingStyle}>
                        <h3>🔄 Connecting to Firebase...</h3>
                        <p>Please wait while we establish connection to the database.</p>
                        {connectionStatus === 'Connection Error' && (
                            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8d7da', borderRadius: '8px', color: '#721c24' }}>
                                <strong>Connection Failed</strong><br />
                                Loading demo data instead. Firebase features may not work properly.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    const renderQuizView = () => (
        <div style={contentStyle}>
            {!quizActive && !showResults && (
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '30px', color: '#333' }}>Real-Time Quiz System</h2>
                    {questions.length === 0 ? (
                        <div style={questionCardStyle}>
                            <h3 style={{ color: '#dc3545', marginBottom: '20px' }}>Waiting for Questions...</h3>
                            <p style={{ color: '#666', marginBottom: '20px' }}>
                                The administrator is preparing questions. They will appear here automatically once added.
                            </p>
                            <div style={{ fontSize: '14px', color: '#666' }}>
                                🔄 {firebaseReady ? 'Connected to Firebase' : 'Running in demo mode'}
                            </div>
                        </div>
                    ) : (
                        <>
                            <div style={{ ...questionCardStyle, marginBottom: '20px' }}>
                                <h3 style={{ color: '#28a745', marginBottom: '15px' }}>
                                    ✅ {questions.length} Questions Available
                                </h3>
                                <p style={{ color: '#666', fontSize: '14px' }}>
                                    {firebaseReady ? 'Questions are synchronized in real-time via Firebase' : 'Running with demo questions'}
                                </p>
                            </div>
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
                        <p style={{ fontSize: '14px', color: firebaseReady ? '#28a745' : '#ffc107', marginBottom: '20px' }}>
                            {firebaseReady ? '✅ Your score has been saved to Firebase!' : '⚠️ Demo mode - score not saved'}
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
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <span style={{
                    padding: '8px 16px',
                    backgroundColor: '#e3f2fd',
                    borderRadius: '20px',
                    fontSize: '14px',
                    color: '#1976d2'
                }}>
                    {firebaseReady ? '🔄 Live Firebase Updates' : '📊 Demo Data'} • {leaderboard.length} participants
                </span>
            </div>
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
                {leaderboard.length === 0 ? (
                    <div style={{
                        padding: '40px',
                        textAlign: 'center',
                        color: '#666'
                    }}>
                        No scores yet. Be the first to complete the quiz!
                    </div>
                ) : (
                    leaderboard.map((entry, index) => (
                        <div key={`${entry.id}-${entry.timestamp}`} style={leaderboardRowStyle(entry.rank)}>
                            <span style={{ fontWeight: 'bold' }}>
                                {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : `#${entry.rank}`}
                            </span>
                            <span>{entry.name}</span>
                            <span style={{ fontWeight: 'bold' }}>{entry.score}</span>
                            <span style={{ fontSize: '14px', color: '#666' }}>{entry.time}</span>
                        </div>
                    ))
                )}
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button onClick={() => setCurrentView('quiz')} style={buttonStyle(true)}>
                    Take Quiz
                </button>
            </div>
        </div>
    );

    const renderAdminAuth = () => (
        <div style={contentStyle}>
            <div style={authFormStyle}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
                    Admin {authMode === 'login' ? 'Login' : 'Sign Up'}
                </h2>

                {authError && (
                    <div style={errorStyle}>
                        {authError}
                    </div>
                )}

                <form onSubmit={handleAuthSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={authForm.email}
                        onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                        style={inputStyle}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={authForm.password}
                        onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                        style={inputStyle}
                        required
                    />
                    {authMode === 'signup' && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={authForm.confirmPassword} onChange={(e) => setAuthForm({ ...authForm, confirmPassword: e.target.value })}
                            style={inputStyle}
                            required
                        />
                    )}
                    <button
                        type="submit"
                        disabled={authLoading}
                        style={{
                            ...buttonStyle(true),
                            width: '100%',
                            marginTop: '20px',
                            opacity: authLoading ? 0.7 : 1
                        }}
                    >
                        {authLoading ? 'Processing...' : (authMode === 'login' ? 'Login' : 'Sign Up')}
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button
                        type="button"
                        onClick={() => {
                            setAuthMode(authMode === 'login' ? 'signup' : 'login');
                            setAuthError('');
                            setAuthForm({ email: '', password: '', confirmPassword: '' });
                        }}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#007bff',
                            textDecoration: 'underline',
                            cursor: 'pointer'
                        }}
                    >
                        {authMode === 'login' ? 'Need an account? Sign up' : 'Already have an account? Login'}
                    </button>
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#666' }}>
                    {!firebaseReady && (
                        <div style={{ color: '#ffc107', marginBottom: '10px' }}>
                            ⚠️ Firebase not connected - Auth may not work
                        </div>
                    )}
                    <button
                        type="button"
                        onClick={() => setCurrentView('quiz')}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#6c757d',
                            textDecoration: 'underline',
                            cursor: 'pointer'
                        }}
                    >
                        Back to Quiz
                    </button>
                </div>
            </div>
        </div>
    );

    const renderAdminPanel = () => (
        <div style={contentStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h2 style={{ color: '#333' }}>Admin Panel</h2>
                <div>
                    <span style={{ marginRight: '15px', color: '#666' }}>
                        Welcome, {currentUser?.email}
                    </span>
                    <button onClick={handleLogout} style={buttonStyle()}>
                        Logout
                    </button>
                </div>
            </div>

            {!firebaseReady && (
                <div style={{
                    backgroundColor: '#fff3cd',
                    border: '1px solid #ffeaa7',
                    borderRadius: '8px',
                    padding: '15px',
                    marginBottom: '20px',
                    color: '#856404'
                }}>
                    <strong>⚠️ Warning:</strong> Firebase connection failed. Admin features may not work properly.
                </div>
            )}

            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ marginBottom: '20px', color: '#333' }}>Add New Question</h3>
                <div style={questionCardStyle}>
                    <input
                        type="text"
                        placeholder="Enter question"
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
                        placeholder="Correct answer (must match one of the options exactly)"
                        value={newQuestion.correct}
                        onChange={(e) => setNewQuestion({ ...newQuestion, correct: e.target.value })}
                        style={inputStyle}
                    />

                    <input
                        type="number"
                        placeholder="Points"
                        value={newQuestion.points}
                        onChange={(e) => setNewQuestion({ ...newQuestion, points: parseInt(e.target.value) || 10 })}
                        style={inputStyle}
                        min="1"
                        max="100"
                    />

                    <button onClick={handleAddQuestion} style={buttonStyle(true)}>
                        Add Question
                    </button>
                </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ marginBottom: '20px', color: '#333' }}>
                    Current Questions ({questions.length})
                </h3>
                {questions.length === 0 ? (
                    <div style={questionCardStyle}>
                        <p style={{ color: '#666', textAlign: 'center' }}>
                            No questions added yet. Add your first question above!
                        </p>
                    </div>
                ) : (
                    questions.map((question, index) => (
                        <div key={question.id} style={{
                            ...questionCardStyle,
                            border: '1px solid #e9ecef'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ marginBottom: '15px', color: '#333' }}>
                                        Question {index + 1}: {question.question}
                                    </h4>
                                    <div style={{ marginBottom: '10px' }}>
                                        <strong>Options:</strong>
                                        <ul style={{ marginLeft: '20px', marginTop: '5px' }}>
                                            {question.options.map((option, optIndex) => (
                                                <li key={optIndex} style={{
                                                    color: option === question.correct ? '#28a745' : '#333',
                                                    fontWeight: option === question.correct ? 'bold' : 'normal'
                                                }}>
                                                    {option} {option === question.correct && '✓'}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div style={{ fontSize: '14px', color: '#666' }}>
                                        <strong>Points:</strong> {question.points} |
                                        <strong> Correct:</strong> {question.correct}
                                    </div>
                                    {question.createdBy && (
                                        <div style={{ fontSize: '12px', color: '#999', marginTop: '5px' }}>
                                            Created by: {question.createdBy}
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={() => handleDeleteQuestion(question.id)}
                                    style={{
                                        backgroundColor: '#dc3545',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '6px',
                                        padding: '8px 12px',
                                        cursor: 'pointer',
                                        fontSize: '12px',
                                        marginLeft: '15px'
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ color: '#333' }}>
                        Leaderboard Management ({leaderboard.length} entries)
                    </h3>
                    {leaderboard.length > 0 && (
                        <button
                            onClick={clearLeaderboard}
                            style={{
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                padding: '10px 15px',
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            Clear All Scores
                        </button>
                    )}
                </div>

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
                    {leaderboard.length === 0 ? (
                        <div style={{
                            padding: '40px',
                            textAlign: 'center',
                            color: '#666'
                        }}>
                            No quiz attempts yet. Scores will appear here automatically!
                        </div>
                    ) : (
                        leaderboard.slice(0, 10).map((entry, index) => (
                            <div key={`admin-${entry.id}-${entry.timestamp}`} style={leaderboardRowStyle(entry.rank)}>
                                <span style={{ fontWeight: 'bold' }}>
                                    {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : `#${entry.rank}`}
                                </span>
                                <span>{entry.name}</span>
                                <span style={{ fontWeight: 'bold' }}>{entry.score}</span>
                                <span style={{ fontSize: '14px', color: '#666' }}>{entry.time}</span>
                            </div>
                        ))
                    )}
                </div>

                {leaderboard.length > 10 && (
                    <div style={{ textAlign: 'center', marginTop: '15px', color: '#666', fontSize: '14px' }}>
                        Showing top 10 entries. Total: {leaderboard.length} participants.
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <div style={statusStyle}>
                    {connectionStatus}
                </div>

                <div style={headerStyle}>
                    <h1 style={titleStyle}>🧠 Real-Time Quiz System</h1>
                    <p>Multi-device synchronized learning platform with Firebase</p>
                </div>

                <div style={navStyle}>
                    <button
                        onClick={() => setCurrentView('quiz')}
                        style={buttonStyle(currentView === 'quiz')}
                    >
                        📝 Take Quiz
                    </button>
                    <button
                        onClick={() => setCurrentView('leaderboard')}
                        style={buttonStyle(currentView === 'leaderboard')}
                    >
                        🏆 Leaderboard
                    </button>
                    <button
                        onClick={() => {
                            if (currentUser) {
                                setCurrentView('admin');
                            } else {
                                setCurrentView('admin-auth');
                            }
                        }}
                        style={buttonStyle(currentView === 'admin' || currentView === 'admin-auth')}
                    >
                        ⚙️ Admin {currentUser ? 'Panel' : 'Login'}
                    </button>
                </div>

                {currentView === 'quiz' && renderQuizView()}
                {currentView === 'leaderboard' && renderLeaderboard()}
                {currentView === 'admin-auth' && renderAdminAuth()}
                {currentView === 'admin' && currentUser && renderAdminPanel()}
            </div>
        </div>
    );
}

export default FirebaseQuizSystem;