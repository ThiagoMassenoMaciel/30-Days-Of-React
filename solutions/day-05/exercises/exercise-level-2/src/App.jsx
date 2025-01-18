import PropTypes from 'prop-types';

const Header = function({text}){
  return(
    <header>
      <span>{text}</span>
    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

function InputField({id, type, placeholder}){
  return(
    <div className="hero">
      <label htmlFor={id}></label>
      <input type={type} name="" id={id} placeholder={placeholder}/>
    </div>
  )
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}

const Button = ({type,text})=>{
  return   <button type={type}>{text}</button>
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

//{sectionData.map((dataObj, index) => ( <Sectionn key={index} data={dataObj} />     ))}
function Main({styleSPAN, textSPAN}){
  const inputs = [
    {  id: "firstName", type: "text", placeholder:"First Name" }
    ,  
    {  id: "lastName", type: "text", placeholder:"Last Name"   }
    ,
    {  id: "email", type: "email", placeholder:"Email"         }
  ]

  return(
    <main>
        <span style={styleSPAN}>{textSPAN}</span>

        <div className='hero'>
          {inputs.map((i, index) => ( <InputField key={index} id={i.id} type={i.type} placeholder={i.placeholder}/>) )}
        </div>

        <Button type='button' text='Subscribe' />

      </main>
  )
}

Main.propTypes = {
  styleSPAN: PropTypes.object,
  textSPAN: PropTypes.string.isRequired
}

function App() {

  const textHEADER = "SUBSCRIBE"
  const styleSPAN = {display:'block', fontWeight:'500'};
  const textSPAN = "Sign up with your email address to receive news and updates";
  return (
    <>
     <div className='app'>
      <Header text={textHEADER}/>
      <Main styleSPAN={styleSPAN} textSPAN={textSPAN}/>
     </div>
    </>
  )
}

export default App