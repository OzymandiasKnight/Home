import './App.css';
import { NavLink, Route, Routes} from 'react-router-dom';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Projects from './pages/Projects';



const Main = () => {
  return (
    <Routes>
      <Route exact path="/Home" element={<Home />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/skills" element={<Skills />}></Route>
      <Route exact path="/projects" element={<Projects />}></Route>
    </Routes>
  );
};

const Band = () => {
  return (
    <div className='band'>
      <NavLink to={'/Home'}><h1>Accueil</h1></NavLink>
      <NavLink to={'/skills'}><h1>Competences</h1></NavLink>
      {/* <NavLink to={'/projects'}><h1>Competences</h1></NavLink> */}
    </div>
  );
}

const About = () => {
  return (
    <div className='about'>
      <div className='contacts'>
        <h3>Téléphone : 06 20 69 48 89 &#40;Laissez moi un message&#41;</h3>
        <h3>Email : patrick.nikielp@gmail.com</h3>
        <a href="https://www.linkedin.com/in/patrick-nikiel/">Linkedin</a>
        <a href="https://github.com/OzymandiasKnight/">GitHub</a>
      </div>
      <div className='infos'>
        <h5>Site fait avec React</h5>
        <h5>Site hébérgé gratuitement avec GitHub Pages</h5>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <Band />
      <Main />
      <About />
    </div>
  );
};

export default App;