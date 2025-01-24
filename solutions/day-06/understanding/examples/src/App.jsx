import PropTypes from 'prop-types';

// Mapping and rendering arrays -------------------------------------------------------------------------------------------------

function App1() {

  return (
    <>
      <div className='container'>
        <div>
          <h1>Numbers List</h1>
          {[1, 2, 3, 4, 5]}
        </div>
      </div>
    </>
  )
}

//Mapping array of numbers--------------------------------------------------------------------------------------------------

const Numbers = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((number) => <li key={number}>{number}</li>)
  return list
}

Numbers.PropTypes= {
  numbers : PropTypes.arrayOf(PropTypes.number).isRequired,
}

// App component

const App2 = () => {
  const numbers = [1, 2, 3, 4, 5]

  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  )
}


// Mapping array of arrays--------------------------------------------------------------------------------------------------

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]

// Skill Component
const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech} {level}
  </li>
)

Skill.propTypes = {
  skill: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

// Skills Component
const Skills = ({ skills }) => {
  const skillsList = skills.map((skill, index) => <Skill key={index} skill={skill} />)
  console.log(skillsList)
  return <ul>{skillsList}</ul>
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.array).isRequired,
};

const App3 = () => {
  return (
    <div className='container'>
      <div>
        <h1>Skills Level</h1>
        <Skills skills={skills} />
      </div>
    </div>
  )
}


//Mapping array of objects--------------------------------------------------------------------------------------------------

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
/*
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (  <Country key={country.name} country={country} />  ))
  return <div>{countryList}</div>
}
*/
// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country, index) => < Country key={index} country={country} />)
  return <div>{countryList}</div>
}

Countries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  })).isRequired,
};
// App component
const App4 = () => (
  <div className='container'>
    <div>
      <h1>Countries List</h1>
      <Countries countries={countries} />
    </div>
  </div>
)

// Key in mapping arrays --------------------------------------------------------------------------------------------------

// eu ja fiz key nas arrays

export default App4
