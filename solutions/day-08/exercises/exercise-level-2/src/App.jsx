import React from 'react';
import foto from './img/foto.jpeg';
import PropTypes from 'prop-types';

// Fuction to show month date year

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img style={{width:'150px', height:'150px', borderRadius:'50%'}} src={image} alt={firstName} />
    <p>
      {firstName} {lastName}
    </p>
  </div>
)

UserCard.propTypes = {
  user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
}

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

Button.propTypes={
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired
}

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

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
      styles,
    } = this.props.data

    return (
      <header style={styles}>
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
    styles: PropTypes.object.isRequired
  }).isRequired,
};

const Count = ({ countt, addOne, minusOne }) => (
  <div >
    <h1>{countt} </h1>
    <div>
      <Button text='+1' onClick={addOne} style={buttonStyles} />
      <Button text='-1' onClick={minusOne} style={buttonStyles} />
    </div>
    
  </div>
)

Count.propTypes = {
  countt: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  minusOne: PropTypes.func.isRequired
}

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

TechList.propTypes = {
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      countt,
      addOne,
      minusOne,
      styles,
    } = this.props
    return (
      <main style={styles}>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Button
            text='Change Background'
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count countt={countt} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    )
  }
}

Main.propTypes = {
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  greetPeople: PropTypes.func.isRequired,
  handleTime: PropTypes.func.isRequired,
  changeBackground: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  countt: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  minusOne: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
};

// Footer Component Class component
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

class App4 extends React.Component {
  state = {
    countt:0,
    count: 0,
    stylesH: {
      backgroundColor: '',
      color: '',
    },
    stylesM: {
      backgroundColor: '',
      color: '',
    },    
    stylesF: {
      backgroundColor: '',
      color: '',
    },
  }
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  addOne = () => {
    this.setState({ countt: this.state.countt + 1 })
  }

  // method which subtract one to the state
  minusOne = () => {
    this.setState({ countt: this.state.countt - 1 })
  }
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  changeBackground = () => {
    console.log(this.state)
    this.setState({count : this.state.count + 1})
    const test = this.state.count % 2 === 0;

    const bgH = test?'var(--color2)':'var(--color1)'
    const bgM = test?'var(--color2)':'var(--color0)'

    const color = test?'var(--color0)':'var(--color00)';
    const border = test ? `2px solid #d5d5d5`: '0px';
    this.setState({ stylesH: {backgroundColor: bgH, color:  color, borderBottom : border } })
    this.setState({ stylesM: {backgroundColor: bgM , color: color} })
    this.setState({ stylesF: {backgroundColor: bgH, color:  color, borderTop: border } })
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
      styles: this.state.stylesH
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const date = new Date()
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: foto }

    return (
      <div className='app' style={this.state.stylesM}>
        <Header styles={this.state.stylesH} data={data} />
        <Main
          styles={this.state.stylesM}
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          countt={this.state.countt}
        />
        <Footer styleF={this.state.stylesF} date={new Date()} />
      </div>
    )
  }
}

export default App4;