import React from "react"

class App extends React.Component {

  state = {
    flag : false,
    hour : 0 ,
    message : '',
    bgCOLOR: '',
  }

  handleClick = () =>{
    console.log("entrou na funcao")
    console.log(this.state)

    const flag = !this.state.flag;
    const variable = new Date();
    let hour = variable.getHours()

    //let hour = 0 // for testing all moments of the day
    let message = ""
    let bgCOLOR = ''

    if(hour > 5 && hour < 12){
      message = "Right now, its morning, time from sunrise to noon";
      bgCOLOR = 'var(--color1)';

    }if( hour === 12){
      message = "Right now, its noon, when time is 12 AM";
      bgCOLOR = 'var(--color2)';

    }

    if( hour > 12 && hour < 17){
      message = "Right now, its afternoon, the sunset are getting closer";
      bgCOLOR = 'var(--color5)';
    }
    
    if( hour > 16 && hour < 18 ){
      message = "Right now, it's evening, time from sunset to nightfall";
      bgCOLOR = 'var(--color3)';

    }
    if( hour > 17 | hour < 6 ){
      message = "Right now, it's night, time from nightfall to sunrise";
      bgCOLOR = 'var(--color4)';
    }

    console.log("as variaveis" + flag + " e :" + hour + " e :" + bgCOLOR )

    this.setState({flag, hour, message, bgCOLOR})

    console.log(this.state)
  }

/*
# Morning : `time from sunrise to noon`
# Noon : `when time is 12 AM`
# Evening : `time from sunset to nightfall`
# Nigh : ` time from nightfall to sunrise`


*/


  render(){
    return(
      <div className="app">
        <button 
        style={{backgroundColor:`${this.state.bgCOLOR}`}} 
        onClick={this.handleClick} type="button"> 
          click
        </button>
        
        { this.state.flag && (
          <main style={{backgroundColor:`${this.state.bgCOLOR}`}}>
            <h1>{this.state.hour}</h1>
            <p>
              {this.state.message}
            </p>
          </main>
        )}

      </div>
    )
  }
}

export default App
