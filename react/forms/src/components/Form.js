import { useId } from "react"
import { useState } from "react"

function Form() {

    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            comments: '',
            employment: '',
            isFriendly: '',
            favColor: ''
        }
    )

    const id = useId()
    console.log(id)

    console.log(formData)

    function handleChange(event) {
        const {name, value, type, checked} = event.target  // destructuring and getting the particular attrib values 
        setFormData(prevFormData => {
            return {
                ...prevFormData, //unpacking the previous version of the object into a new object
                [name]: type === "checkbox" ? checked : value   //updating the object key with the new value
            }
        })
    }

    function handleSubmit() {
        console.log(formData)
    }

    return (
        <div className='Form'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='First Name'
                    name='firstName'    // this attrib is necessary in order to differentiate between different inputs. The value must be same as the relevant state object key.
                    onChange={handleChange}
                // Controlled Component
                // Setting the `value` attribute in input tags and linking it to the state 
                // (`formData` here) creates a controlled component in React. This ensures 
                // that the input field's displayed value is always synchronized with the state,
                // making React the single source of truth. This practice helps maintain 
                // consistent UI behavior, allows for full control over form inputs (e.g., 
                // validation or formatting), and prevents potential bugs from UI-state 
                // mismatches. Controlled components offer predictability in form handling, 
                // especially in complex forms where different UI parts depend on each other.
                    value={formData.firstName}
                    id={id + '-firstName'}
                />
                <br/><br/>
                <input 
                    type='text' 
                    placeholder='Last Name'
                    name='lastName'   
                    onChange={handleChange}
                    value={formData.lastName}
                    id={id + '-lastName'}
                />
                <br/><br/>
                <textarea
                    placeholder='Comments'
                    name='comments'
                    onChange={handleChange}
                    value={formData.comments}
                    id={id + '-comments'}
                />
                <br/><br/>
                <input 
                    type="checkbox" 
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    name="isFriendly"
                    id={id + '-isFriendly'}
                />
                <label htmlFor={id + '-isFriendly'}>Are you friendly?</label>
                <br/><br/>

                <fieldset>
                    <legend>Current Employment Status</legend>
                    <input 
                        type='radio' 
                        id={id + 'unemployment'} 
                        name='employment'
                        value='unemployment'
                        checked={formData.employment === 'unemployed'}
                        onChange={handleChange}
                    />
                    <label htmlFor={id + 'unemployment'}>Unemployment</label><br/>  
                    <input 
                        type='radio' 
                        id={id + 'part-time'} 
                        name='employment'
                        value='part-time'
                        checked={formData.employment === 'part-time'}
                        onChange={handleChange}
                    />
                    <label htmlFor={id + 'part-time'}>Part-Time</label><br/> 
                    <input 
                        type='radio' 
                        id={id + 'full-time'} 
                        name='employment'
                        value='full-time'
                        checked={formData.employment === 'full-time'}
                        onChange={handleChange}
                    />
                    <label htmlFor={id + 'full-time'}>Full Time</label><br/> 
                </fieldset>

                <br/><br/>
                <label htmlFor={id + 'fav-color'}>What is your favorite color?</label>
                <br />
                <select 
                    id={id + 'fav-color'} 
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                >
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <br/><br/>
                <button>Submit</button>
            </form>
            <p>
                {Object.keys(formData).map(key => (
                    <li key={key}>
                        {key}: {key === 'isFriendly' ? (formData[key] ? 'Yes' : 'No') : formData[key]}
                    </li>
                ))}
            </p>
        </div>
    )
}


export default Form