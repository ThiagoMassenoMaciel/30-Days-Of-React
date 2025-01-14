
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import css from './images/css.png';
import html from './images/html.png';
import js from './images/javascript.png';
import react from './images/react.png';



const array = [css,html,js,react];
const arrayFormatted = array.map((i) => <img key={i} src={i} alt='tech'></img>)

const estiloSpan ={
  fontFamily: "Jersey 15",
  fontWeight: '400',
  fontStyle: 'normal',
  marginBottom: '50px'
}

const App =()=> (

  <div className='app'>
    <header>
      <span style={estiloSpan}>Front-end Technologies</span>
    </header>
    <main>
      <div className='hero'>
        {arrayFormatted}
      </div>
    </main>
  </div>
)

const main = (
  <App/>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(main);