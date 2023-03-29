import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { messages: 'Hello', likesCount: 9, id: 1 },
  { messages: 'How are you?', likesCount: 25, id: 2 }
];

let dialogData = [
  { name: 'Andrey', id: 1 },
  { name: 'Sasha', id: 2 },
  { name: 'Tamik', id: 3 },
  { name: 'Astik', id: 4 },
  { name: 'Alan', id: 5 },
  { name: 'Yasya', id: 6 }
];

let messageData = [
  { message: 'Hello', id: 1 },
  { message: 'How are you?', id: 2 },
  { message: 'Salam', id: 3 },
  { message: 'What is your name?', id: 4 },
  { message: 'Aleikum Salam', id: 5 },
  { message: 'Privet', id: 6 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} dialogData={dialogData} messageData={messageData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
