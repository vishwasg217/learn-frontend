import ReactIcon from '../images/react-icon.png';

function Header() {
    return (
      <header className="Header">
        <nav>
          <img src={ReactIcon} alt="react icon" className='react-logo-img'/>
          <h1 className='nav__logo-text'>ReactFacts</h1>
          <h3 className='nav__title'>React Course - Project 1</h3>
          {/* <ul className='nav-items'>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul> */}
        </nav>
      </header>
    );
  }

export default Header;