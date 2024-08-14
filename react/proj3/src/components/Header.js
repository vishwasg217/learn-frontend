import AppLogo from '../images/troll-face-logo.png'
import './Header.css'

function Header() {
    return (
        <div className='Header'>
            <img src={AppLogo} alt='logo' className='Header__Logo'/>
            <h1>Meme Generator</h1>
            <h3>React Course - Project 3</h3>
        </div>
    )
    
}

export default Header