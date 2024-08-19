import TextInput from './TextInput.js'
import './Form.css'
import memesData from '../data/memesData.js'

function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() *  memesArray.length)
    const url = memesArray[randomNumber].url
    
    return url
}

function Form({setImgUrl, topText, setTopText, bottomText, setBottomText}) {


    function handleClick() {
        const imgUrl = getMemeImage()
        setImgUrl(imgUrl)
        setTopText(topText)
        setBottomText(bottomText)
    }


    return (
        <div className='Form'>
            <div className='Inputs'>
                <TextInput 
                    id='toptext' 
                    label='Top text'
                    value={topText}
                    onChange={(e) => setTopText(e.target.value)}
                />
                <TextInput
                    id='bottomtext'
                    label='Bottom text'
                    value={bottomText}
                    onChange={(e) => setBottomText(e.target.value)}
                />
            </div>
            <input type='submit' className='Form__Button' onClick={handleClick} value='Get a new meme image  🖼'/>
        </div>
    )
}

export default Form