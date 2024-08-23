import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import { useState } from 'react';


const page = (
  <div className="App" id="root">
      <Header/>
      <Main/>
      {/* <Footer/> */}
  </div>
);

console.log(page)

function App() {

  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="App" id="root">
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
