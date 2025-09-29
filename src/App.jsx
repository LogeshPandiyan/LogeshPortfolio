import './App.css';
import Navbar from './components/Navbar';
import { Home } from './pages/Homepage/Home';
import { About } from './pages/Aboutpage/About';
import Skills from './pages/Skillpage/Skills';
import Education from './pages/Educationpage/Education';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contacts/Contact';
import Footer from './pages/Footer/Footer';
import './index.css'




function App() {
  return (
    <>
    <div id="home"><Navbar/></div>

    <div id="home"><Home /></div>

    <div id="about"><About/></div>

    <div id="skills"><Skills/></div>

    <div id="education"><Education/></div>

    <div id="projects"><Projects/></div>
    
    <div id="contact"><Contact /></div>

    <div id="contact"><Footer/></div>
    
    </>
  )
}

export default App;
