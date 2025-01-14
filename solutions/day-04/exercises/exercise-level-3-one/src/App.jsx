
function App() {
  const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }
  
  const HexaColor1 = () => <div style={{backgroundColor:`${hexaColor()}`, flex:'1', height:'fit-content', textAlign:'center', padding:'70px'}}>{hexaColor()}</div>
  
  return (
    <>
      <HexaColor1/>
      <HexaColor1/>
      <HexaColor1/>
      <HexaColor1/>
      <HexaColor1/>
    </>
  )
}

export default App
