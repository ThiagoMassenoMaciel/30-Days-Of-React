import React from "react";
import PropTypes from 'prop-types';

import autumn from './img/autumn.jpg';
import winter from './img/winter.jpg';
import spring from './img/spring.jpg';

const Header = ({ functions:{ funcAutum, funcWinter, funcSpring, funcSummer}}) =>{
  return(
    <header>
      <ul>
        <li  onClick={funcAutum}>Autumn</li>
        <li  onClick={funcWinter}>Winter</li>
        <li  onClick={funcSpring}>Spring</li>
        <li  onClick={funcSummer}>Summer</li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  functions: PropTypes.shape({
    funcAutum: PropTypes.func.isRequired,
    funcWinter: PropTypes.func.isRequired,
    funcSpring: PropTypes.func.isRequired,
    funcSumer: PropTypes.func.isRequired,
  }).isRequired,
}


class App extends React.Component {
  state = {
    flag: false,
    imgSRC: '',
    mensage: "click in some season above"
  }
  handleclick = () => {
    this.setState({
      flag: !this.state.flag,
    })
  }

  funcAutum = () => {
    let imgSRC = autumn;
    let message = "Autumn is the season when the day length decreases and night length increases as the season progresses";
    console.log("Autum")
    this.setState({imgSRC, message })
  }

  funcWinter = () => {
    let imgSRC = winter;
    let message = "Winter is the coldest season of the year in polar and temperate climates. It occurs after autumn and before spring";
    this.setState({imgSRC, message })

    
  }

  funcSpring = () => {
    let imgSRC = spring;
    let message = "It's a season when the day and night are equal in length. It occurs succeeding winter and preceding summer";
    this.setState({imgSRC, message })
  }

  funcSummer = () => {
    let imgSRC = spring;
    let message = "It's the hottest season and days becomes longest than nights, occurring after spring and before autumn";
    this.setState({imgSRC, message })
  }

  functions = {
    fAutum : this.funcAutum,
    fWinter: this.funcWinter,
    fSpring: this.funcSpring,
    fSummer: this.funcSummer
  }

  render() {


    return (
      <div className='app'>
        <Header functions={this.functions}/>
        <main>
          {this.state.flag && (
            <img style={{width:'100%'}} src={this.state.imgSRC} alt="season" />
          )}
          <button onClick={this.handleclick} type="button"> click </button>
        </main>
      </div>
    )
  }
}


export default App
