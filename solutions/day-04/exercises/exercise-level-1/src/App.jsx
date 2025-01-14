const Button = ()=>{
  const buttonStyle={ 
    border:'0px',
    width:'fit-content', 
    height:'fit-content',
    backgroundColor:'white',

    borderRadius:'20px',
    fontWeight:'500',
    fontSize:'20px',
    padding:'10px 30px',
    display:'block'
  }
  return(
    <button style={buttonStyle} type="button">button</button>
  )
}

function InputField(){
  const inputStyle={
    backgroundColor:'white',
    color:'black',
    width:'200px',
    height:'40px',
    borderRadius:'10px',
    border:'0px',

    fontSize:'15px',

    textAlign:'center'

  }

  const labelStyle={
    color:'white',
    fontSize:'20px'

  }

  return(
    <>
      <label style={labelStyle} htmlFor="email">Email </label>
      <input style={inputStyle} type="email" name="" id="email" placeholder="Write your email here"/>
    </>
    
  )
}

const Alert = ()=>{
  return(
    <div className="alert">
      <p>warning alert box</p>
      <p>success alert box</p>
    </div>
  )
}

/*
const Alert = function(){
  return`${alert('Warning')} ${alert('Sucsses')}`
}

 <Alert/>

*/

function App() {
  
  return (
    <>
      <Button/>
      <InputField/>
      <Alert/>
    </>
  )
}

export default App
