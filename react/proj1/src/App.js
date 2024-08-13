import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';


const page = (
  <div className="App" id="root">
      <Header/>
      <Main/>
      {/* <Footer/> */}
    </div>
);

console.log(page)

function App() {
  return (
    page
  );
}

export default App;
