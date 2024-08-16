import './App.css';
import Header from './components/Header.js'
import Form from './components/Form.js';
import Meme from './components/Meme.js';
import { useState } from 'react';

function App() {

  const [imgUrl, setImgUrl] = useState('./images/meme1.png')

  return (
    <div className="App">
      <Header/>
      <Form setImgUrl={setImgUrl}/>
      <Meme
        imgurl={imgUrl}
        toptext='Shut up'
        bottomtext='And take my money'
      />
    </div>
    );
}

export default App;
