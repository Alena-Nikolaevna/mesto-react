import React from "react";
import "../index.css";

function Card() {

    return (
        <template id="card-template">
        <article className="card">
            <img className="card__image" src="#" alt="фотография" />
            <button className="card__delete-bt" type="button" aria-label="Удалить карточку"></button>
            <div className="card__container">
                <h2 className="card__title">Название</h2>
                <button className="card__like-bt" type="button" aria-label="Поставить лайк"></button>
                <p className="card__count-like">0</p>
            </div>
        </article>
      </template>
    )
}

export default Card;

