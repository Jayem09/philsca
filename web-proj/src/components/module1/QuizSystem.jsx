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
        const { getDatabase, ref, push, remove, onValue, off, set } = await import('https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js');
        const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js');

        // Initialize Firebase if not already initialized
        if (getApps().length === 0) {
            firebaseApp = initializeApp(firebaseConfig);
        } else {
            firebaseApp = getApps()[0];
        }

        database = getDatabase(firebaseApp);
        auth = getAuth(firebaseApp);

        return { ref, push, remove, onValue, off, set, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };
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
    const [shuffleLoading, setShuffleLoading] = useState(false);

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

    // Shuffle array function
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

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
            setAuthError('Database not connected. Please check your connection.');
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

    const shuffleQuestions = async () => {
        if (!firebaseReady || !firebaseFunctions) {
            alert('Database not connected. Cannot shuffle questions.');
            return;
        }

        if (questions.length === 0) {
            alert('No questions to shuffle!');
            return;
        }

        if (!window.confirm(`Are you sure you want to shuffle all ${questions.length} questions? This will immediately change the question order for all students taking the quiz!`)) {
            return;
        }

        setShuffleLoading(true);

        try {
            const { ref, remove, set } = firebaseFunctions;

            // First, get all current questions
            const questionsToShuffle = [...questions];

            // Remove all questions from Firebase
            const questionsRef = ref(database, 'questions');
            await remove(questionsRef);

            // Wait a moment for the removal to propagate
            await new Promise(resolve => setTimeout(resolve, 500));

            // Shuffle the questions array
            const shuffledQuestions = shuffleArray(questionsToShuffle);

            // Add shuffled questions back to Firebase with new IDs
            const promises = shuffledQuestions.map(async (question, index) => {
                const { id, ...questionData } = question; // Remove old ID
                const newQuestionRef = ref(database, `questions/q_${Date.now()}_${index}`);
                return set(newQuestionRef, {
                    ...questionData,
                    shuffledAt: new Date().toLocaleString(),
                    shuffledBy: currentUser?.email || 'admin'
                });
            });

            await Promise.all(promises);

            alert(`Successfully shuffled ${questions.length} questions! All students will see the new order immediately. 🎲`);

        } catch (error) {
            console.error('Error shuffling questions:', error);
            alert('Error shuffling questions. Please try again.');
        } finally {
            setShuffleLoading(false);
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
                alert('Databse not connected. Please check your connection.');
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
                    alert('Database not connected. Please check your connection.');
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
                    alert('Database not connected. Please check your connection.');
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

    const shuffleButtonStyle = {
        backgroundColor: '#6f42c1',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 20px',
        cursor: shuffleLoading ? 'not-allowed' : 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.3s ease',
        opacity: shuffleLoading ? 0.7 : 1
    };

    if (loading) {
        return (
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <div style={headerStyle}>
                        <h1 style={titleStyle}>Quiz</h1>
                        <p>Multi-device synchronized learning platform</p>
                    </div>
                    <div style={loadingStyle}>
                        <h3>Connecting...</h3>
                        <p>Please wait while we establish connection to the database.</p>
                        {connectionStatus === 'Connection Error' && (
                            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8d7da', borderRadius: '8px', color: '#721c24' }}>
                                <strong>Connection Failed</strong><br />
                                Loading demo data instead. Please check your internet connection.
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
                    <h2 style={{ marginBottom: '30px', color: '#333' }}>Real-Time Quiz</h2>
                    {questions.length === 0 ? (
                        <div style={questionCardStyle}>
                            <h3 style={{ color: '#dc3545', marginBottom: '20px' }}>Waiting for Questions...</h3>
                            <p style={{ color: '#666', marginBottom: '20px' }}>
                                The administrator is preparing questions. They will appear here automatically once added.
                            </p>
                            <div style={{ fontSize: '14px', color: '#666' }}>
                                🔄 {firebaseReady ? 'Connected' : 'Running in demo mode'}
                            </div>
                        </div>
                    ) : (
                        <>
                            <div style={{ ...questionCardStyle, marginBottom: '20px' }}>
                                <h3 style={{ color: '#28a745', marginBottom: '15px' }}>
                                    ✅ {questions.length} Questions Available
                                </h3>
                                <p style={{ color: '#666', fontSize: '14px' }}>
                                    {firebaseReady ? 'Questions are synchronized in real-time.' : 'Running with demo questions'}
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
                Leaderboard
            </h2>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <span style={{
                    padding: '8px 16px',
                    backgroundColor: '#e3f2fd',
                    borderRadius: '20px',
                    fontSize: '14px',
                    color: '#1976d2'
                }}>
                    {firebaseReady ? '🔄 Live Updates' : '📊 Demo Data'} • {leaderboard.length} Entries
                </span>
            </div>

            {leaderboard.length === 0 ? (
                <div style={questionCardStyle}>
                    <h3 style={{ color: '#666', marginBottom: '15px' }}>No scores yet!</h3>
                    <p style={{ color: '#666' }}>Be the first to complete the quiz and make it to the leaderboard!</p>
                </div>
            ) : (
                <div style={leaderboardStyle}>
                    {leaderboard.map((entry, index) => (
                        <div key={entry.id} style={leaderboardRowStyle(entry.rank)}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <span style={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    color: entry.rank === 1 ? '#ffc107' : entry.rank === 2 ? '#6c757d' : entry.rank === 3 ? '#dc3545' : '#333'
                                }}>
                                    #{entry.rank}
                                </span>
                                <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{entry.name}</div>
                                    <div style={{ fontSize: '12px', color: '#666' }}>{entry.time}</div>
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#007bff' }}>
                                    {entry.score} pts
                                </div>
                                <div style={{ fontSize: '12px', color: '#666' }}>
                                    {questions.length > 0 ? ((entry.score / (questions.length * 10)) * 100).toFixed(1) : 0}%
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    const renderAuthForm = () => (
        <div style={contentStyle}>
            <div style={authFormStyle}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
                    {authMode === 'login' ? 'Admin Login' : 'Create Admin Account'}
                </h2>

                {authError && (
                    <div style={errorStyle}>
                        {authError}
                    </div>
                )}

                <div>
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
                            value={authForm.confirmPassword}
                            onChange={(e) => setAuthForm({ ...authForm, confirmPassword: e.target.value })}
                            style={inputStyle}
                            required
                        />
                    )}
                    <button
                        onClick={handleAuthSubmit}
                        disabled={authLoading}
                        style={{
                            ...buttonStyle(true),
                            width: '100%',
                            marginTop: '15px',
                            opacity: authLoading ? 0.7 : 1
                        }}
                    >
                        {authLoading ? 'Please wait...' : (authMode === 'login' ? 'Login' : 'Sign Up')}
                    </button>
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button
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
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        {authMode === 'login' ? 'Need an account? Sign up' : 'Already have an account? Login'}
                    </button>
                </div>
            </div>
        </div>
    );

    const renderAdminPanel = () => (
        <div style={contentStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h2 style={{ color: '#333', margin: 0 }}>Admin Panel</h2>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', color: '#666' }}>
                        {currentUser?.email}
                    </span>
                    <button onClick={handleLogout} style={buttonStyle()}>
                        Logout
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
                <div style={questionCardStyle}>
                    <h3 style={{ marginBottom: '20px', color: '#333' }}>Add New Question</h3>
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
                        placeholder="Correct answer (must match one option exactly)"
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

                <div style={questionCardStyle}>
                    <h3 style={{ marginBottom: '20px', color: '#333' }}>Quick Actions</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <button
                            onClick={shuffleQuestions}
                            disabled={shuffleLoading}
                            style={shuffleButtonStyle}
                        >
                            {shuffleLoading ? (
                                <>
                                    <span>🔄</span>
                                    Shuffling...
                                </>
                            ) : (
                                <>
                                    <span>🎲</span>
                                    Shuffle Questions
                                </>
                            )}
                        </button>
                        <button
                            onClick={clearLeaderboard}
                            style={{
                                ...buttonStyle(),
                                backgroundColor: '#dc3545'
                            }}
                        >
                            🗑️ Clear Leaderboard
                        </button>
                        <div style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
                            <strong>Questions:</strong> {questions.length}<br />
                            <strong>Leaderboard:</strong> {leaderboard.length} entries<br />
                            <strong>Status:</strong> {connectionStatus}
                        </div>
                    </div>
                </div>
            </div>

            <div style={questionCardStyle}>
                <h3 style={{ marginBottom: '20px', color: '#333' }}>Manage Questions</h3>
                {questions.length === 0 ? (
                    <p style={{ color: '#666', textAlign: 'center' }}>No questions yet. Add some above!</p>
                ) : (
                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        {questions.map((question, index) => (
                            <div key={question.id} style={{
                                border: '1px solid #e9ecef',
                                borderRadius: '8px',
                                padding: '15px',
                                marginBottom: '15px',
                                backgroundColor: 'white'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>
                                            Question {index + 1}
                                        </h4>
                                        <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
                                            {question.question}
                                        </p>
                                        <div style={{ fontSize: '12px', color: '#666' }}>
                                            <strong>Options:</strong> {question.options.join(', ')}<br />
                                            <strong>Correct:</strong> {question.correct}<br />
                                            <strong>Points:</strong> {question.points}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteQuestion(question.id)}
                                        style={{
                                            backgroundColor: '#dc3545',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            padding: '8px 12px',
                                            cursor: 'pointer',
                                            fontSize: '12px'
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
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
                    <h1 style={titleStyle}>Quiz</h1>
                    <p>Multi-device synchronized learning platform</p>
                </div>

                <div style={navStyle}>
                    <button
                        onClick={() => setCurrentView('quiz')}
                        style={buttonStyle(currentView === 'quiz')}
                    >
                        Quiz
                    </button>
                    <button
                        onClick={() => setCurrentView('leaderboard')}
                        style={buttonStyle(currentView === 'leaderboard')}
                    >
                        Leaderboard
                    </button>
                    <button
                        onClick={() => setCurrentView(currentUser ? 'admin' : 'auth')}
                        style={buttonStyle(currentView === 'admin' || currentView === 'auth')}
                    >
                        {currentUser ? 'Admin Panel' : 'Admin Login'}
                    </button>
                </div>

                {currentView === 'quiz' && renderQuizView()}
                {currentView === 'leaderboard' && renderLeaderboard()}
                {currentView === 'auth' && renderAuthForm()}
                {currentView === 'admin' && currentUser && renderAdminPanel()}
            </div>
        </div>
    );
}

export default FirebaseQuizSystem;