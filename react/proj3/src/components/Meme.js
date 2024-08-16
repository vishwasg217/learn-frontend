import './Meme.css'
// import memesData from '../../public/memesData.js';


function Meme({ imgurl, toptext, bottomtext }) {
    return (
        <figure className="Meme">
            <img src={imgurl} alt="meme" className="Meme__Img" />
            <figcaption className="Meme__Text">
                <span className="Meme__Toptext">{toptext.toUpperCase()}</span>
                <span className="Meme__Bottomtext">{bottomtext.toUpperCase()}</span>
            </figcaption>
        </figure>
    );
}

export default Meme