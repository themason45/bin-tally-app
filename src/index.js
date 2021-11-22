import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from "./App";
import firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyDwJiwgIrOf4GUbJZFK6GlYeeaMAUFB27s",
    authDomain: "bin-tally-app.firebaseapp.com",
    databaseURL: "https://bin-tally-app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bin-tally-app",
    storageBucket: "bin-tally-app.appspot.com",
    messagingSenderId: "184929600429",
    appId: "1:184929600429:web:eeb9cfb8bdf01091dcd724",
    measurementId: "G-XJ5W7ZFY8M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
    <App/>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();