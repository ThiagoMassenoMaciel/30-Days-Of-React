import React from "react";
import PropTypes, { object } from 'prop-types';

import brazil from './img/brazil.png';
import usa from './img/usa.jpeg';
import china from './img/china.png';
import india from './img/india.png';
import indonesia from './img/indonesia.png';
import pakistan from './img/pakistan.png';
import nigeria from './img/nigeria.jpg';
import bangladesh from './img/bangladesh.png';
import russia from './img/russia.png';
import japan from './img/japan.png';

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header >
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}


Header.propTypes = {
  data: PropTypes.shape({
    welcome: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    author: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

const Article = ({ name, value})=>{
  return(
    <article>
      <h4>{name}</h4>
      <h4>{value}</h4>
    </article>
  )
}

Article.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

class Section extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { imgSRC, countryName, capital, language, population, currency } = this.props.object;

    return(
      <section>
          <img style={{width:'300px', height:'200px', border:'1px solid #000'}} src={imgSRC} alt={countryName} />
          <h3>{countryName}</h3>
          <div className="text">
            <Article name="Capital : " value={capital}/>
            <Article name="Language : " value={language}/>
            <Article name="Population : " value={population}/>
            <Article name="Currency : " value={currency}/>
          </div>
        </section>
    )
  }
}

Section.propTypes = {
  object : PropTypes.shape({
    imgSRC: PropTypes.string.isRequired, 
    countryName: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired, 
    language: PropTypes.string.isRequired, 
    population: PropTypes.string.isRequired, 
    currency : PropTypes.string.isRequired,
    }).isRequired,
}

class Main extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const objectt = this.props.object;
    const functionn = this.props.func;
   

    return(
      <main>
        <Section object={objectt}/>
        
        <button onClick={functionn} type="button">
          Select Country 
        </button>     

      </main>
    )
  }
}

Main.propTypes = {
  object: PropTypes.object.isRequired,
  func: PropTypes.func.isRequired
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer style={this.props.styleF}>
        
          <p>Copyright {this.props.date.getFullYear()}</p>
        
      </footer>
    )
  }
}

Footer.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  styleF: PropTypes.object.isRequired
};

class App extends React.Component {
  state = {
    count:0
  }
  
  changeCountry = () => {
    console.log(this.state)
    let value = this.state.count < 9? (this.state.count + 1) : 0;
    this.setState({count : value})
    console.log(this.state)
  }
  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Thiago',
        lastName: 'Masseno',
      },
      date: 'Oct 7, 2020',
    }

    const arrayy = [
      {
        imgSRC: brazil,
        countryName: "Brazil",
        capital: "Brasilia",
        language: "Portuguese",
        population: "213.1 Millions",
        currency: "Real",
      },
      {
        imgSRC: usa,
        countryName: "United States",
        capital: "Washington D.C.",
        language: "English",
        population: "332.4 Millions",
        currency: "Dollar",
      },
      {
        imgSRC: china,
        countryName: "China",
        capital: "Beijing",
        language: "Mandarin",
        population: "1411.78 Millions",
        currency: "Yuan",
      },
      {
        imgSRC: india,
        countryName: "India",
        capital: "New Delhi",
        language: "Hindi",
        population: "1380.004 Millions",
        currency: "Rupee",
      },
      {
        imgSRC: indonesia,
        countryName: "Indonesia",
        capital: "Jakarta",
        language: "Indonesian",
        population: "273.523 Millions",
        currency: "Rupiah",
      },
      {
        imgSRC: pakistan,
        countryName: "Pakistan",
        capital: "Islamabad",
        language: "Urdu",
        population: "220.892 Millions",
        currency: "Pakistani Rupee",
      },
      {
        imgSRC: nigeria,
        countryName: "Nigeria",
        capital: "Abuja",
        language: "English",
        population: "216.014 Millions",
        currency: "Naira",
      },
      {
        imgSRC: bangladesh,
        countryName: "Bangladesh",
        capital: "Dhaka",
        language: "Bengali",
        population: "164.670 Millions",
        currency: "Taka",
      },
      {
        imgSRC: russia,
        countryName: "Russia",
        capital: "Moscow",
        language: "Russian",
        population: "145.934 Millions",
        currency: "Rubel",
      },
      {
        imgSRC: japan,
        countryName: "Japan",
        capital: "Tokyo",
        language: "Japanese",
        population: "126.5 Millions",
        currency: "Yen",
      },
    ];

    return (
      <div className='app' >
        <Header data={data} />
        <Main   func={this.changeCountry} object={ arrayy[this.state.count]} />
        <Footer styleF={this.state.stylesF} date={new Date()} />
      </div>
    )
  }
}

export default App;