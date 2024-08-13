import IntroImg from '../images/intro-img.png';

function Intro() {
    return (
        <section className="Intro">
            <img src={IntroImg} alt="intro img" className='intro-img'/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}

export default Intro;