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

  const styleHEXACOLORR = { flex:'1', height:'fit-content', textAlign:'center', padding:'70px', color:'black'};
  
  const HexaColor1 = ({styleHEXACOLOR, color}) =>  {
    return( 
      <div style={{ backgroundColor:`${color}`, ...styleHEXACOLOR}}>
        
        {color}
      </div>
    )
  }
  
  HexaColor1.propTypes = {
    styleHEXACOLOR: PropTypes.object.isRequired, // Enforces object for styles
    color: PropTypes.string.isRequired, // Enforces string for hex color code
    
  };
  
  return (
    <>
      <HexaColor1 color={hexaColorr()} styleHEXACOLOR={styleHEXACOLORR}  />
      <HexaColor1 color={hexaColorr()} styleHEXACOLOR={styleHEXACOLORR}  />
      <HexaColor1 color={hexaColorr()} styleHEXACOLOR={styleHEXACOLORR}  />
      <HexaColor1 color={hexaColorr()} styleHEXACOLOR={styleHEXACOLORR}  />
      <HexaColor1 color={hexaColorr()} styleHEXACOLOR={styleHEXACOLORR}  />

    </>
  )
}

export default App
