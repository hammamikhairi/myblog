import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import "./navbar.sass";

const Navbar = () => {

  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log(localStorage.getItem('isDarkMode') === 'true');
    setDarkMode(localStorage.getItem('isDarkMode') === "true");
    if (localStorage.getItem('isDarkMode') === "true") {
      toggleDarkMode();
    }
  },[])


  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
    let bod = document.getElementsByTagName("body")[0];
    bod.classList.toggle("light-body")
    bod.classList.toggle("dark-body")
    let docStyle = document.documentElement.style
    docStyle.getPropertyValue('--grey') === "#fff" ? docStyle.setProperty('--grey', '#424242') : docStyle.setProperty('--grey', '#fff')
  }

  return (
    <div id="navbar" className="navbar-container"  >
      <div className="navbar">
        <div className="logo">
          <Link to="/myblog"><h1 id="logo">Khairi Hammami</h1></Link>
        </div>
        <ul className="links">
          <DarkModeSwitch
            style={{ marginBottom: '0px' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={25}
          />
        </ul>
      </div>
    </div>
  );
}

export default Navbar