const Header = function(){
  return(
    <header>
      <span>SUBSCRIBE</span>
    </header>
  )
}

function InputField(){
  return(
    <div className="hero">
    <label htmlFor="firstName"></label>
    <input type="text" name="" id="firstName" placeholder='First Name' />

    <label htmlFor="lastName"></label>
    <input type="text" name="" id="lastName" placeholder='Last Name' />

    <label htmlFor="email"></label>
    <input type="email" name="" id="email" placeholder='Email' />
  </div>
  )
}

function Main(){
  return(
    <main>
        <span style={{display:'block', fontWeight:'500'}}>Sign up with your email address to receive news and updates</span>

        <InputField/>

        <button type="button">Subscribe</button>
      </main>
  )
}

function App() {

  return (
    <>
     <div className='app'>
      <Header/>
      <Main/>
     </div>
    </>
  )
}

export default App