import React from 'react';

class DataFetcherNOapi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true, // Inicialmente, o componente está carregando
      error: null,
    };
  }

  componentDidMount() {
    // Simula uma chamada de API ou outra operação assíncrona
    setTimeout(() => {

      const simulatedData = {
        name: "John Doe",
        age: 30,
        city: "New York",
      };
 
      const simulatedError = new Error("Failed to fetch data");

      if (simulatedData) {
        this.setState({ data: simulatedData, loading: false });
      } else if (simulatedError) {
        this.setState({ error: simulatedError, loading: false });
      } else {  
        this.setState({ loading: false });
      }
    }, 2000); // Simula um atraso de 2 segundos
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>; // Mostra uma mensagem de carregamento
    }

    if (error) {
      return <div>Error: {error.message}</div>; // Mostra uma mensagem de erro
    }

    if (!data) {
      return <div>No data available.</div>; // Mensagem se não houver dados
    }


    return (
      <div>
        <h2>User Data:</h2>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
        <p>City: {data.city}</p>
      </div>
    );
  }
}

class DataFetcherAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true, // Inicialmente, o componente está carregando
      error: null,
    };
  }

  async componentDidMount() {
 
    let simulatedData = [];


    const url = 'https://imdb236.p.rapidapi.com/imdb/tt7631058/cast';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'b35f85e31emsh778adca3dcb8527p1e326ajsnaa36cf288cad',
        'x-rapidapi-host': 'imdb236.p.rapidapi.com'
      }
    };
      
    try {
      const response = await fetch(url, options)
      const data = await response.json()

      simulatedData = data.map((item) => {
        return `${item.fullName}--${item.job}`
      })

      this.setState({ data: simulatedData, loading: false }); // Atualiza o state *após* receber os dados

    } catch (erroR) {
      console.error(erroR);
      this.setState({ error: erroR, loading: false }); // Atualiza o state com o erro
    }

    console.log("Dentro do setTimeOut")
    console.log(simulatedData);
  }
  
  render() {

    console.log("entrou no render");
    console.log(this.state.data)

    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>; // Mostra uma mensagem de carregamento
    }

    if (error) {
      return <div>Error: {error.message}</div>; // Mostra uma mensagem de erro
    }

    if (!data  || data.length === 0) {
      return <div>No data available.</div>; // Mensagem se não houver dados
    }

    console.log("------ mostrar data depois de chamar a API ------")
    console.log(data)

    return (
      <div className='comesFROMapi'>
        {data.map((item, index) => ( // Adicione um index como key, pois os items podem ser iguais
          <p key={index}>{item}</p> 
        ))}
      </div>
    );
  }
}


class App2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      flagNOapi: false,
      flag: false
    }
  }

  display = () => {
    this.setState({flag: !this.state.flag})
  }

  toggleComponent = () => {
    this.setState({flagNOapi: !this.state.flagNOapi})

  }

/*
        {
          this.state.flag ? 
          <main style={{background: 'var(--bgcolor1)'}}>
            <button 
              onClick={this.toggleComponent} 
              type="button">
                {this.state.flagNOapi? "Test Component API simulated":"Test Component API fetched"}
            </button>
            <DataFetcherNOapi/>
          </main>
          :
          <main>
            <button 
              onClick={this.toggleComponent} 
              type="button">
                {this.state.flagNOapi? "click for test Component API simulated":"click for test Component API fetched"}
            </button>

            <DataFetcherAPI/>
          </main>
        }

{
  this.state.flag ? 
  <main style={{background: 'var(--bgcolor1)'}}>
    <button 
      onClick={this.toggleComponent} 
      type="button">
        {this.state.flagNOapi ? " click for API fetched" : "click for API simulated"}
    </button>
    <p>
      {this.state.flagNOapi? "Righ now is Testing Component API simulated":"Right now is Testing Component API fetched"}
    </p>
      {this.state.flagNOapi? <DataFetcherNOapi/> : <DataFetcherAPI/>}
  </main>
  :  <h2>Click on the button above to se Class component react + API </h2>      


}

*/

/*================================================================================================
        {
          this.state.flag && (
            <main>
                <button 
                  id='button'
                  onClick={this.toggleComponent} 
                  type="button">
                    {this.state.flagNOapi? "stop it":"show it"}
                </button>
                { this.state.flagNOapi ?<DataFetcherNOapi/> : <DataFetcherAPI/>}
            </main>
          )
        }
*/

  render(){
    
    return(
      <div className="app">
        <button onClick={this.display} type="button">{this.state.flag? "stop" : "run"}</button>

        {
          this.state.flag ? 
          <main style={{background: 'var(--bgcolor1)'}}>
            <button 
              id='button'
              onClick={this.toggleComponent} 
              type="button">
                {this.state.flagNOapi ? " click for API fetched" : "click for API simulated"}
            </button>
            <p>
              {this.state.flagNOapi? "Righ now is Testing Component API simulated":"Right now is Testing Component API fetched"}
            </p>
              {this.state.flagNOapi? (<DataFetcherNOapi/>) : (<DataFetcherAPI/>)}
          </main>
          :  <h2 style={{color:'black'}}>Click on the button above to se Class component react + API </h2>      

        }

      </div>
    )
  }
}


export default App2
