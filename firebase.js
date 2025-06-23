// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    // Your Firebase config
    apiKey: "AIzaSyDif3zH0o6Qw6ePXOs-Z7Osi5DKQMhiees", // secret key
    authDomain: "philscz.firebaseapp.com",
    projectId: "philscz",
    storageBucket: "philscz.firebasestorage.app",
    messagingSenderId: "687676435022",
    appId: "1:687676435022:web:ac57d257575fca876d311f",
    measurementId: "G-53B6E422TB",
    databaseURL: "https://philscz-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
