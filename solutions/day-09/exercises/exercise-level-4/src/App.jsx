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
      // Simula dados sendo recebidos (substitua por sua lógica real de busca de dados)
      // para simular o erro fazer com que esta variavel SIMULATEDdata receba null
      //const simulatedData = null;

      const simulatedData = null;
      // Simula um erro (comente ou remova conforme necessário)
      // deixa o valor da variavel simulatedData null e simulatedError com a instancia do erro 
      const simulatedError = new Error("Failed to fetch data");

      if (simulatedData) {
        this.setState({ data: simulatedData, loading: false });
      } else if (simulatedError) {
        this.setState({ error: simulatedError, loading: false });
      } else { //caso não tenha dados nem erro quando as duas variaveis simulatedData e simulatedError tiver valor null
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


class App extends React.Component {
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

          </main>
        }


*/

  render(){
    
    return(
      <div className="app">
        <button onClick={this.display} type="button">{this.state.flag? "stop" : "run"}</button>
      
        {
          this.state.flag && (
            <main>
                <button 
                  id='button'
                  onClick={this.toggleComponent} 
                  type="button">
                    {this.state.flagNOapi? "stop it":"show it"}
                </button>
                { this.state.flagNOapi && <DataFetcherNOapi/>}
            </main>
          )
        }
      </div>
    )
  }
}


export default App
