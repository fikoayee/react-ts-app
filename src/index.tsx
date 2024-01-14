import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Add the Google Fonts link to the head of the document
const googleFontsLink = document.createElement('link');
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap';
googleFontsLink.rel = 'stylesheet';
document.head.appendChild(googleFontsLink);

// Add the Box Icons link to the head of the document
const boxIconsLink = document.createElement('link');
boxIconsLink.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
boxIconsLink.rel = 'stylesheet';
document.head.appendChild(boxIconsLink);


