import TextInput from './TextInput.js'
import './Form.css'

function Form() {
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
            <input type='submit' className='Form__Button' value='Get a new meme image  🖼'/>
        </div>
    )
}

export default Form