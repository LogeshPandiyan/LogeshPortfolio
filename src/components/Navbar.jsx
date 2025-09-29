import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const myFullName ='LOGESH';

  return (
    <>
      <div className='container'>

        <header className='header-section'>
          <h1 className='head-name ms-3'>
            {myFullName} 
            <span className='text-primary ms-2'>
              P</span>
          </h1>
        </header>

        {/* Desktop Menu */}
        <nav className="nav-section">
          <ul> 
            <li><a href="#home">Home           </a></li>
            <li><a href="#about">About        </a></li>
            <li><a href="#skills">Skills      </a></li>
            <li><a href="#projects">Projects  </a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact    </a></li>
            <i className="fa-regular fa-moon dark-mode-icon mb-3 ms-3 me-4"></i>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="hamburger" 
             onClick={toggleMenu}>

          <i className="fas fa-bars"></i>
        </div>

        {/* Mobile Side Menu */}
        <nav className={`side-menu ${isOpen ? 'active' : ''}`}>
          <div className="menu-header">
            <span className='text-dark'>
              LOGESH <span 
              className='text-primary'>P</span>
            </span>
            <i className="fas fa-times close-icon" 
            onClick={toggleMenu}></i>
          </div>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
            <i className="side-moon fa-regular fa-moon dark-mode-icon mb-3 ms-3 me-4"></i>
          </ul>
        </nav>

      </div>
    </>
  );
}
export default Navbar;

// 213547