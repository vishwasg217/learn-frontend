import TextInput from './TextInput.js'
import './Form.css'
import memesData from '../data/memesData.js'

function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() *  memesArray.length)
    const url = memesArray[randomNumber].url
    
    return url
}

function Form({setImgUrl}) {

    function handleClick() {
        const imgUrl = getMemeImage()
        setImgUrl(imgUrl)
    }


    return (
        <div className='Form'>
            <div className='Inputs'>
                <TextInput 
                    id='toptext' 
                    label='Top text'
                    placeholder='Shut up'
                />
                <TextInput
                    id='bottomtext'
                    label='Bottom text'
                    placeholder='And take my money'
                />
            </div>
            <input type='submit' className='Form__Button' onClick={handleClick} value='Get a new meme image  🖼'/>
        </div>
    )
}

export default Form