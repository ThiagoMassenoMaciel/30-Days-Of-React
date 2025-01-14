import picture from './images/foto.jpeg';
import check from './images/check.png';
import clock from './images/clock.png';

function Data(){
  return(
    <div className="date">
      <img style={{width:'20px', height:'20px', display:'inline'}} src={clock} alt="" />
      <p style={{margin:'20px 0px'}}> Joined on jan 13, 2025</p>
    </div>
  )
}

function Name(){
  return(
    <div className='name'>  
      <h1>
        Thiago Masseno
      </h1>
      <img style={{width:'40px', height:'40px'}} src={check} alt="check" />
    </div>
  )
}

function Section(){
  const skills = ['HTML','CSS','Sass',' JS ','React','Redux','Node.js','MongoDB','Python','Flask','Django','Express.js','MySQL',' GraphQL','PostgreSQL','Docker','Heroku',' Git ','Gatsby','NumPy','Pandas' ]
  const skillsFORMATTED = skills.map((i) => <span key={i}>{i}</span>)

  return(
    <>
      <h3>SKILLS</h3>
      <section>
        {skillsFORMATTED}
      </section>
    </>
  )
}
function App() {


  return (
    <>
      <main>
        <img src={picture} alt="profile" />
        <Name/>
        <p>Front-end Junior developer, Brazil</p>
        <Section/>
        <Data/>

      </main>
    </>
  )
}

export default App
