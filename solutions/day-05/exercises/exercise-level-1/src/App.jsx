import PropTypes from 'prop-types';
import css from './images/css.png';
import html from './images/html.png';
import js from './images/javascript.png';
import react from './images/react.png';

const Header=({text}) =>{
    return(
      <header>
        <h1>{text}</h1>
      </header>
    )
}

Header.propTypes = {
    text: PropTypes.string.isRequired
};

function Main({array}){
  return(
    <main>
    {array}
  </main>
  )
}

Main.propTypes = {
  array: PropTypes.arrayOf(PropTypes.node).isRequired
};

function App() {

  const images = [css, html, js, react]
  const imagesFormatted = images.map((i) => <img src={i} alt={i} key={i}></img>)

  return (
    <>
    
      <Header text="Front-end Technologies"/>
      <Main array={imagesFormatted} />

    </>
  )
}

export default App
