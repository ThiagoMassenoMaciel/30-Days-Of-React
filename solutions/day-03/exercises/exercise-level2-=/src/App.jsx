
function App() {

  return (
    <>
     <div className='app'>
      <header>
        <span>SUBSCRIBE</span>
      </header>
      <main>
        <span style={{display:'block', fontWeight:'500'}}>Sign up with your email address to receive news and updates</span>

        <div className="hero">
          <label htmlFor="firstName"></label>
          <input type="text" name="" id="firstName" placeholder='First Name' />

          <label htmlFor="lastName"></label>
          <input type="text" name="" id="lastName" placeholder='Last Name' />

          <label htmlFor="email"></label>
          <input type="email" name="" id="email" placeholder='Email' />
        </div>

        <button type="button">Subscribe</button>
      </main>
     </div>
    </>
  )
}

export default App