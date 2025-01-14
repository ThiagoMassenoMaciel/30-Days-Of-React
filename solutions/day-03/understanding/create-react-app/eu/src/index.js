//index.js
// importing the react and react-dom package

import React from 'react';
import ReactDOM from 'react-dom/client'; 
import foto from './images/foto.jpeg'

const user = (
  <div>
    <img src={foto} alt='thiago image' />
  </div>
)
const jsxElement = <h1>This is a JSX element</h1>

//const title = <h2>Getting Started React</h2>

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header >
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2> {title}</h2>
      <h3>{subtitle}</h3>
      <p>{author.firstName}{author.lastName}</p>
      <small>{ date}</small>
    </div>
  </header>
)


const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 2002
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)


// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        {techsFormatted}
      </ul>
        {result}
        {personAge}
        {user}
    </div>
  </main>
)

const footerStyles = {
  backgroundColor: '#50ffFF',
  textAlign: 'center'
}

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer style={footerStyles}>
    <p>{copyRight}</p>
  </footer>
)

// JSX element, app, a container or a parent
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
