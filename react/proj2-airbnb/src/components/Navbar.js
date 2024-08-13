import AirbnbLogo from '../images/airbnb-logo.png';

function Navbar() {
    return (
        <nav className="Navbar">
            <img src={AirbnbLogo} alt="airbnb logo" className='airbnb-logo'/>
        </nav>
    );
}

export default Navbar;