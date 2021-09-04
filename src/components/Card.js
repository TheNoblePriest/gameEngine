import React from 'react';
import './Card.css';

function Card({image, gameTitle, star}) {
    return (
        <div className="card">
            <div className="card__img">
                <img src={image} />
            </div>
            <div className="card__text">
                <p>{gameTitle}</p>
                <p>{star}</p>
            </div>

        </div>
    )
}

export default Card
