
import starIcon from '../images/star-icon.png'; // Adjust path to your actual star icon

import './Card.css'

const cardData = [
    {
        image: '/images/cards/card-1.png',
        title: "Life Lessons with Katie Zaferes",
        price: 136,
        location: "USA",
        review_score: 5.0,
        review_count: 6,
        status: "SOLD OUT",
    },
    {
        image: '/images/cards/card-2.png',
        title: "Learn Wedding Photography",
        price: 125,
        location: "USA",
        review_score: 5.0,
        review_count: 30,
        status: "ONLINE",
    },
    {
        image: '/images/cards/card-3.png',
        title: 'Group Mountain Biking',
        price: 50,
        location: 'USA',
        review_score: 4.8,
        review_count: 2,
        status: 'ONLINE'
    }
]

function Card({index, image, title, price, location, review_score, review_count, status}) {
    return (
        <div key={index} className='card'>
            <div className='card__img_container'>
                <img src={image} alt="card img" className='card__img'/>
                <div className="card__img_overlay">{status}</div>
            </div>
            <div className='card-info'>
                <div className='card-header'>
                    <img src={starIcon} alt="star" className="star-icon" />
                    <span className="card__review_score">{review_score.toFixed(1)}</span>
                    <span className="card__review_count">({review_count})</span>
                    <span className="card__loc">| {location}</span>
                </div>
                <span className='card__title'>{title}</span><br/>
                <span className='card__price'><b>From ${price}</b> / person</span><br/>
                {/* <span className='card__status'>{card.status}</span> */}
            </div>
        </div>
    )
}


function Cards() {
    return (
        <section className='Cards'>
            {cardData.map((card, index) => (
                <Card
                    index={index}
                    {...card}
                />
            ))}
        </section>
    );
}

export default Cards