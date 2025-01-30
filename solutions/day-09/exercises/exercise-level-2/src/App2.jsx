import React from "react";

import autumn from './img/autumn.jpg';
import winter from './img/winter.jpg';
import spring from './img/spring.jpg';
import summer from './img/summer.jpg';


class App2 extends React.Component {
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
    let imgSRC = summer;
    let message = "It's the hottest season and days becomes longest than nights, occurring after spring and before autumn";
    this.setState({imgSRC, message })
  }
  render() {


    return (
      <div className='app'>
        <header>
          <ul>
            <li  onClick={this.funcAutum}>Autumn</li>
            <li  onClick={this.funcWinter}>Winter</li>
            <li  onClick={this.funcSpring}>Spring</li>
            <li  onClick={this.funcSummer}>Summer</li>
          </ul>
        </header>

        <main>
          {this.state.flag? (
            <img style={{width:'100%'}} src={this.state.imgSRC} alt="season" />
          ): (<p>Chose one Season above</p>)}
          <button onClick={this.handleclick} type="button"> after clicked some season , click here to see picture</button>
        </main>
      </div>
    )
  }
}


export default App2
