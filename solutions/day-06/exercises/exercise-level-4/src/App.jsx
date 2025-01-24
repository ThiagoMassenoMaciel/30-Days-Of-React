import PropTypes from 'prop-types';

const Section = ({ country, population })=>{
  const semPORCENTO = 7693165599
  let calc = population/semPORCENTO;
  calc*=100
  const lenghtBAR = calc
  console.log(country + " " + lenghtBAR)

  return(
    <section style={{width:'100%'}}>
      <h3>{country}</h3>

      <div className="space">
        <div style={{width:`${lenghtBAR}%`, height:'20px', backgroundColor:'#ffd900' }} className="graficBAR"></div>
      </div>
      <h3 style={{marginLeft:'10px', width:'fit-content'}}>{population}</h3>
    </section>

  )
}

Section.propTypes = {
  country: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired
}


const Main = ({ array })=>{

  const arrayFormatted = array.map((i, index) => <Section key={index} country={i.country} population={i.population} />)
  
  return(
    <main>
      {arrayFormatted}
    </main>
  )
}

Main.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string.isRequired,
      population: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function App() {

  const data = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ]
 
  return (
    <>
    <div className="app">
      <header>
        <h1>30 Days Of React</h1>
        <h4>World Population</h4>
        <p>The most populated countries</p>
      </header>

      <Main array={data}/>

    </div>
   
    </>
  )
}

export default App
