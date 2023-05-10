import React from "react";
import "../index.css";

function Card({ card, onCardClick }) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <article key={card._id} className="card">

            <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
            <button className="card__delete-bt" type="button" aria-label="Удалить карточку"></button>
            <div className="card__container">
                <h2 className="card__title">{card.name}</h2>
                <button className="card__like-bt" type="button" aria-label="Поставить лайк"></button>
                <p className="card__count-like">{card.likes.length}</p>
            </div>
        </article>
    )
}

export default Card;

