import './App.css';
import Header from './components/Header.js'
import Form from './components/Form.js';
import Meme from './components/Meme.js';
import { useState } from 'react';

function App() {

  const [imgUrl, setImgUrl] = useState('./images/meme1.png')
  const [topText, setTopText] = useState('Shut up')
  const [bottomText, setBottomText] = useState('And take my money')

  return (
    <div className="App">
      <Header/>
      <Form 
        setImgUrl={setImgUrl}
        topText={topText}
        setTopText={setTopText}
        bottomText={bottomText}
        setBottomText={setBottomText}
      />
      <Meme
        imgurl={imgUrl}
        toptext={topText}
        bottomtext={bottomText}
      />
    </div>
    );
}

export default App;
