import { useId, useState } from 'react'
import './Form.css'

function Form() {

    const [formData, setFormData] = useState(
        {
            emailId: '',
            firstPassword: '',
            finalPassword: '',
            newsletterSignup: ''
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if ( formData.emailId === '' || formData.firstPassword === '' || formData.finalPassword === '') {
            console.log('Please enter all the details')
        } 
        
        if (formData.firstPassword !== formData.finalPassword) {
            console.log('Passwords do not match')
        } else {
            console.log('Sign Up Successful')
        }

        if (formData.newsletterSignup) {
            console.log('Thanks for signing up for our newsletter!')
        }
        
    }

    const id = useId;

    return (
        <div className='Form'>
            <form onSubmit={handleSubmit}>
                <br/><br/>
                <label htmlFor='email-id'>Email ID</label>
                <br/>
                <input 
                    type='text'
                    id={id + 'email-id'}
                    name='emailId'
                    value={formData.emailId}
                    onChange={handleChange}
                />

                <br/><br/>
                <label htmlFor='first-password'>Enter Password</label>
                <br/>
                <input 
                    type='password'
                    id={id + 'first-password'}
                    name='firstPassword'
                    value={formData.firstPassword}
                    onChange={handleChange}
                />

                <br/><br/>
                <label htmlFor='final-password'>Confirm Password</label>
                <br/>
                <input 
                    type='password'
                    id={id + 'final-password'}
                    name='finalPassword'
                    value={formData.finalPassword}
                    onChange={handleChange}
                />

                <br/><br/>
                
                <input
                    type='checkbox'
                    id={id + 'newsletter-signup'}
                    name='newsletterSignup'
                    value={formData.newsletterSignup}
                    onChange={handleChange}
                />
                <label htmlFor='newsletter-signup'>I want to join the newsletter</label>
                <br/><br/>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Form