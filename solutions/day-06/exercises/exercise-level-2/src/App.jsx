import PropTypes from 'prop-types';

const Header = ({text})=>(
  <header>
    <h1>{text}</h1>
  </header>
)

Header.propTypes = {
  text: PropTypes.string.isRequired
}

const Block = ( {  number }) => {
  
  const calcPRIME = function(y){

    let  boollean = false;
  
    if(y === 2){
      boollean = true
    }
  
    if( y > 2){
      let count = 1
      let remainders = 0;
  
      while( count < y){
        if( y % count === 0){
          remainders++;
        }
        count++;
      }
  
      if(remainders === 1){
        boollean = true;
      }
  
    }
  
    return boollean
  }
  
  const ResultColor = function(y){
  
    let prime = false;
    let even  = false;


    if(y % 2 === 0 | y === 0){
      even = true;
    }
    
    prime = calcPRIME(y)
  
    if(even === true){
      return "var(--even)";
    }else if(prime === true){
      return "var(--prime)";
    }else{
      return "var(--odds)";
    }
  
  }
  
  return(

  <div className='block' style={{backgroundColor : `${ResultColor(number)}`}}>
    <span>{number}</span>
  </div>
)}

Block.propTypes = {
  number: PropTypes.number.isRequired,
}


const ArrayOfBlocks = ({ arraY })=>{

  const arrayFormatted = arraY.map((Y, index) => 
    
    <Block key={index} number={Y} />
  )

  console.log(arraY)
  console.log("array formatado")
  console.log(arrayFormatted)

  return(

    <>
      {arrayFormatted}
    </>
  );
}

ArrayOfBlocks.propTypes = {
  arraY : PropTypes.arrayOf(PropTypes.number).isRequired,
}

function App() {

  const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

  return (
    <>
      <div className='app'>
        <Header text="30 days of react" />
        <main>
          <ArrayOfBlocks arraY={array}/>
        </main>
        

      </div>
    </>
  )
}

export default App
