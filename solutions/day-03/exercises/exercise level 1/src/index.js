
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import css from './images/css.png';
import html from './images/html.png';
import js from './images/javascript.png';
import react from './images/react.png';

import  {header }from './header.js';

const Html5 = ['Elementos semânticos', 'header', 'nav', 'main', 'section', 'article', 'aside', 'footer','Formulários','inputs' ,'vídeo', 'áudio','Canvas','SVG']
const Html5formattted = Html5.map((i) => <li key={i}>{i}</li>)

const Css3 = ['Seletores CSS' ,'box model','Flexbox' ,'Grid' ,'Transições', 'animações', 'Responsividade']
const Css3formatted = Css3.map((i) => <li key={i}>{i}</li>)

const JavaScript = ['Variáveis', 'tipos de dados', 'operadores','Estruturas de controle','condicionais','loops', 'Funções', 'DOM-Document Object Model','Eventos']
const JavaScriptFORMATTED =JavaScript.map((i) => <li key={i}>{i}</li>)

const Reactt = ['JSX (JavaScript XML)', 'Componentes','Props', 'state','Lifecycle methods','Contexto','Hooks', 'useState','useEffect', 'Webpack',]
const ReacttFORMATTED = Reactt.map((i) => <li key={i}>{i}</li>)

const app = (
  <div className='app'>
    {header}
    <main>
      <div className='hero'>
        <p>
        HTML5, CSS3 e React formam a tríade fundamental para construir interfaces web modernas e interativas. Para dominar essa área, você precisará aprofundar-se em diversos conceitos e técnicas.
        </p>
        <section style={{backgroundColor:'#EF652A' , color:'white'}}>
          <img style={{width:'30%', height:'30%'}} src={html} alt='tech'></img>
          <p>
            <ul>
              {Html5formattted }
            </ul>
          </p>
        </section>

        <section style={{backgroundColor:'#34A8DB'}}>
          <img style={{width:'30%', height:'30%'}} src={css} alt='tech'></img>
          <p>
            <ul>
              {Css3formatted}
            </ul>
          </p>
        </section>

        <section  style={{backgroundColor:'#FFDA3E'}}>
          <img style={{width:'30%', height:'30%'}} src={js} alt='tech'></img>
          <p>
            <ul>
              {JavaScriptFORMATTED}
            </ul>
          </p>
        </section>

        <section  style={{backgroundColor:' #62DAFB'}}>
          <img style={{width:'30%', height:'30%'}} src={react} alt='tech'></img>
          <p>
            <ul>
              {ReacttFORMATTED}
            </ul>
          </p>
        </section>

      </div>
    </main>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);