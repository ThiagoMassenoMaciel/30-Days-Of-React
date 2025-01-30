import React from "react";

import autumn from './img/autumn.jpg';
import winter from './img/winter.jpg';
import spring from './img/spring.jpg';
import summer from './img/summer.jpg';


class App3 extends React.Component {
  state = {
    flagFA: false,
    flagFW: false,
    flagFS: false,
    flagFSM: false,
    imgSRC: '',
    message: "click in some season above"
  }

/*
  handleclick = () => {
    this.setState({ flag: !this.state.flag, })

    this.funcAutum()
  }

  handleclick = (showPicture) => {
    this.setState({
      flag: !this.state.flag,
    })

    if(showPicture === 'fa'){
      this.funcAutum();
    }else if(showPicture=== 'fw'){
      this.funcWinter();
    }else if(showPicture=== 'fs'){
      this.funcSpring();
    }else if(showPicture=== 'fsm'){
      this.funcSummer()
    }
  }
*/
  funcAutum = () => {
    let imgSRC = autumn;
    let message = "Autumn is the season when the day length decreases and night length increases as the season progresses";
    console.log("Autum")
    this.setState({ flagFA: !this.state.flagFA, })
    this.setState({imgSRC, message })
  }

  funcWinter = () => {
    let imgSRC = winter;
    let message = "Winter is the coldest season of the year in polar and temperate climates. It occurs after autumn and before spring";
    this.setState({ flagFW: !this.state.flagFW, })
    this.setState({imgSRC, message })

    
  }

  funcSpring = () => {
    let imgSRC = spring;
    let message = "It's a season when the day and night are equal in length. It occurs succeeding winter and preceding summer";
    this.setState({ flagFS: !this.state.flagFS, })
    this.setState({imgSRC, message })
  }

  funcSummer = () => {
    let imgSRC = summer;
    let message = "It's the hottest season and days becomes longest than nights, occurring after spring and before autumn";
    this.setState({ flagFSM: !this.state.flagFSM, })
    this.setState({imgSRC, message })
  }

  render() {


    return (
      <div className='app'>
        <header>
          <ul>
            <li style={{color:`${this.state.flagFA? 'var(--color)': 'var(--color1)'}`}}  onClick={this.funcAutum}>Autumn</li>
            <li style={{color:`${this.state.flagFW? 'var(--color)': 'var(--color1)'}`}}  onClick={this.funcWinter}>Winter</li>
            <li style={{color:`${this.state.flagFS? 'var(--color)': 'var(--color1)'}`}}  onClick={this.funcSpring}>Spring</li>
            <li style={{color:`${this.state.flagFSM? 'var(--color)': 'var(--color1)'}`}}  onClick={this.funcSummer}>Summer</li>
          </ul>
        </header>

        <main>
          
          {this.state.flagFA | this.state.flagFW | this.state.flagFS | this.state.flagFSM ? (
            <>
              <img style={{width:'100%'}} src={this.state.imgSRC} alt="season" />
              <p>{this.state.message}</p>
            </>
          ): (<p>Chose one Season above</p>)}
          
        </main>
      </div>
    )
  }
}

export default App3
