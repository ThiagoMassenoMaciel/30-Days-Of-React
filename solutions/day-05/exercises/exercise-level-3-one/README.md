# Aprendi 
### Eu corrigi para aparecer o exato código decimal correspondente a cor atual da div
```
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

    </>
  )
```
###### Se eu quiser aplicar um valor que fica mudando dinamicamente uma propriedade do CSS eu uso style object dentro do file que faz o component react
### Erro 1
###### EM VEZ DE ESCREVER ISSO 
```
      <HexaColor1 styleHEXACOLOR={styleHEXACOLORR} hexaColor={hexaColorr}/>
      <HexaColor1 styleHEXACOLOR={styleHEXACOLORR} hexaColor={hexaColorr}/>
      <HexaColor1 styleHEXACOLOR={styleHEXACOLORR} hexaColor={hexaColorr}/>
      <HexaColor1 styleHEXACOLOR={styleHEXACOLORR} hexaColor={hexaColorr}/>
      <HexaColor1 styleHEXACOLOR={styleHEXACOLORR} hexaColor={hexaColorr}/>
```
###### FAZER ISSO 
```
  {fiveComponents.map((i) => { <HexaColor1  key={i} styleHEXACOLOR={styleHEXACOLORR} hexaColor={hexaColorr}/> })}
``` 

### Erro 2
###### NÃO FAZ SENTIDO USAR PROPS NESTE EXEMPLO DE CÓDIGO , POIS SE EU DEIXAR ASSIM , ELE N VAI DEIXAR CORES DIFERENTES EM CADA DIV
```
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

  const styleHEXACOLORR = { flex:'1', height:'fit-content', textAlign:'center', padding:'70px'};
  
  const HexaColor1 = ({styleHEXACOLOR, hexaColor}) =>  {
    return( 
      <div style={styleHEXACOLOR}>
        
        {hexaColor}
      </div>
    )
  }
  
  HexaColor1.propTypes = {
    styleHEXACOLOR: PropTypes.object.isRequired, // Enforces object for styles
    hexaColor: PropTypes.func.isRequired, // Enforces string for hex color code
    
  };
  
  return (
    <>
      <HexaColor1 styleHEXACOLOR={styleHEXACOLORR} hexaColor={hexaColorr} />
      <HexaColor1 styleHEXACOLOR={styleHEXACOLORR} hexaColor={hexaColorr} />
      <HexaColor1 styleHEXACOLOR={styleHEXACOLORR} hexaColor={hexaColorr} />
      <HexaColor1 styleHEXACOLOR={styleHEXACOLORR} hexaColor={hexaColorr} />
      <HexaColor1 styleHEXACOLOR={styleHEXACOLORR} hexaColor={hexaColorr} />

    </>
  )
}

export default App
```
### Erro 3
###### Eu não consigo fazer com que uma função seja React child 
##### Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it. Error Component Stack at div (<anonymous>) at HexaColor1 (App.jsx:29:25) at App (<anonymous>) overrideMethod	@	hook.js:608

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
