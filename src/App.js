import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact.js';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
