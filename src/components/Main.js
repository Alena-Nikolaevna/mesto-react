import React from "react";
//import avatar from "../images/Avatar.png";
import peroAvatar from "../images/Vector-pero.svg";

import Card from "./Card";
import api from "../utils/api.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  //Переменные состояния(голубым), отвечающие за полученные данные из API(имя, о себе, аватар)
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  //Переменная состояния для карточек
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    // Получаем данные с сервера
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => { console.log(err) });

    // Получаем карточки с сервера
    api.getInitialCards()
      .then((res) => {
        setCards(res)
      })
      .catch((err) => { console.log(err) });
  }, []);

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__container">
          <img className="profile__avatar" src={userAvatar} alt="Аватарка" onClick={onEditAvatar} />
          <img className="profile__avatar-redact" src={peroAvatar} alt="Редактировать аватар" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" aria-label="Редактировать" className="profile__edit-button" onClick={onEditProfile}></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button type="button" aria-label="Добавить" className="profile__add-button" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map((card) => <Card card={card}
          key={card._id}
          onCardClick={onCardClick}
        />)}
      </section>

    </main>
  );
}

export default Main;
