import PropTypes from 'prop-types';

function App() {

  const hexaColorr = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

  const styleHEXACOLORR = {height:'120px', width:'120px', padding:'0px'};
  
  const HexaColor1 = ({styleHEXACOLOR, color}) =>  {
    return( 
      <div className='block' style={{ backgroundColor:`${color}`, ...styleHEXACOLOR}}>
        
        {color}
      </div>
    )
  }
  
  HexaColor1.propTypes = {
    styleHEXACOLOR: PropTypes.object.isRequired, // Enforces object for styles
    color: PropTypes.string.isRequired, // Enforces string for hex color code
    
  };
  
  const AllBLocks = ()=>{
    const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]

    const arrayOfBlocks = array.map((i) => <HexaColor1 key={i} color={hexaColorr()} styleHEXACOLOR={styleHEXACOLORR}  />)
    return(
      <main>
        {arrayOfBlocks}
      </main>
    )
  }
    
  return (
    <>
      <div className="app">
        <header>
          <h1>30 days of react</h1>

          <p>Hexadecimal Colors</p>
        </header>
        
        <AllBLocks/>
      </div>
    </>
  )
}

export default App
