import './TextInput.css'

function TextInput({id, label, placeholder, value, onChange}) {
    return (
        <div className='TextInput'>
            <label for={id} className='TextInput__Label'>{label}</label>
            <input 
                type='text' 
                id={id} className='TextInput__Field' 
                // placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default TextInput