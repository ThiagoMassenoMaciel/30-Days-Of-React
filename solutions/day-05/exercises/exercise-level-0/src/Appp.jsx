// este file eu corrigi a validação do propType
import PropTypes from 'prop-types';
import css from './images/css.png';
import html from './images/html.png';
import js from './images/javascript.png';
import react from './images/react.png';

const Html5 = ['Elementos semânticos', 'header', 'nav', 'main', 'section', 'article', 'aside', 'footer', 'Formulários', 'inputs', 'vídeo', 'áudio', 'Canvas', 'SVG'];
const Html5formatted = Html5.map((i) => <li key={i}>{i}</li>);

const Css3 = ['Seletores CSS', 'box model', 'Flexbox', 'Grid', 'Transições', 'animações', 'Responsividade'];
const Css3formatted = Css3.map((i) => <li key={i}>{i}</li>);

const JavaScript = ['Variáveis', 'tipos de dados', 'operadores', 'Estruturas de controle', 'condicionais', 'loops', 'Funções', 'DOM-Document Object Model', 'Eventos'];
const JavaScriptFORMATTED = JavaScript.map((i) => <li key={i}>{i}</li>);

const Reactt = ['JSX (JavaScript XML)', 'Componentes', 'Props', 'state', 'Lifecycle methods', 'Contexto', 'Hooks', 'useState', 'useEffect', 'Webpack'];
const ReacttFORMATTED = Reactt.map((i) => <li key={i}>{i}</li>);

// Text: Front-end Technologies
const Header = ({ styleSPAN, text }) => {
  return (
    <header style={{ textAlign: 'center' }}>
      <span style={styleSPAN}>{text}</span>
    </header>
  );
};

Header.propTypes = {
  styleSPAN: PropTypes.object.isRequired, // Ensure styleSPAN is an object
  text: PropTypes.string.isRequired, // Ensure text is a string
};

Section.propTypes = {
  styleSECTION: PropTypes.object.isRequired, // Ensure styleSECTION is an object
  imgSrc: PropTypes.string.isRequired, // Ensure imgSrc is a string
  arrayLi: PropTypes.arrayOf(PropTypes.node).isRequired, // Ensure arrayLi is an array of nodes
};

const Section = ({ styleSECTION, imgSrc, arrayLi }) => {
  return (
    <section style={styleSECTION}>
      <img style={{ width: '30%', height: '30%' }} src={imgSrc} />
      <ul>{arrayLi}</ul>
    </section>
  );
};

const Sectionn = ({ data: { styleSECTION, imgSrc, arrayLi } }) => {
  return (
    <section style={styleSECTION}>
      <img style={{ width: '30%', height: '30%' }} src={imgSrc} />
      <ul>{arrayLi}</ul>
    </section>
  );
};

Sectionn.propTypes = {
  data: PropTypes.shape({
    styleSECTION: PropTypes.object.isRequired,
    imgSrc: PropTypes.string.isRequired,
    arrayLi: PropTypes.arrayOf(PropTypes.node).isRequired,
  }).isRequired,
};

function Appp() {
  const styleSPAN = {
    fontFamily: "Jersey 15",
    fontWeight: '400',
    fontStyle: 'normal',
    marginBottom: '150px',
    backgroundColor: 'black',
    color: 'white',
    padding: '50px auto',
    fontSize: '40px',
  };

  const sectionData = [
    {
      styleSECTION: { backgroundColor: '#34A8DB' },
      imgSrc: css,
      arrayLi: Css3formatted,
    },
    {
      styleSECTION: { backgroundColor: '#FFDA3E' },
      imgSrc: js,
      arrayLi: JavaScriptFORMATTED,
    },
    {
      styleSECTION: { backgroundColor: '#62DAFB' },
      imgSrc: react,
      arrayLi: ReacttFORMATTED,
    },
  ];

  return (
    <div className="app">
      <Header styleSPAN={styleSPAN} text="Front-end Technologies" />
      <main>
        <div className="hero">
          <p>
            HTML5, CSS3 e React formam a tríade fundamental para construir interfaces web modernas e interativas. Para dominar essa área, você precisará aprofundar-se em diversos conceitos e técnicas.
          </p>
          <Section styleSECTION={{ backgroundColor: '#EF652A' }} imgSrc={html} arrayLi={Html5formatted} />
          {sectionData.map((dataObj, index) => ( <Sectionn key={index} data={dataObj} />     ))}
        </div>
      </main>
    </div>
  );
}

export default Appp;