import React from "react";
import { useEffect, useState } from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import ConfirmDeletePopup from "./ConfirmDeletePopup.js";

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from "../utils/api.js";
//import Card from "./Card";

function App() {

  //Переменные состояния(голубым), отвечающие за видимость четырех попапов:
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const [removeCard, setRemoveCard] = useState(null);

  // Стейт, отвечающий за данные текущего пользователя ===
  //Переменная состояния - отвечающая за полученные данные из API(имя, о себе, аватар = data)
  const [currentUser, setCurrentUser] = useState({});

  //Переменная состояния для карточек (список карточек)
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Получаем данные пользователя с сервера
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => { console.log(err) });

    // Получаем карточки с сервера
    api.getInitialCards()
      .then((res) => {
        setCards(res)
      })
      .catch((err) => { console.log(err) });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => { console.log(err) });
  }

  //Обработчик удаления своей карточки
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards => cards.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => { console.log(err) });
  }

  //Обработчик сохранения данных пользователя -??
  function handleUpdateUser(data) {
    // Сохраняем данные пользователя
    api.patchUserInfo(data)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch((err) => { console.log(err) });
  }

  //Обработчик сохранения аватара
  function handleUpdateAvatar(item) {
    // Обновляем аватар
    api.patchUserAvatar(item)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch((err) => { console.log(err) });
  }

  //Обработчик добавления новой карточки
  function handleAddPlaceSubmit(data) {
    // Добавляем/сохраняем новую карточку
    api.createNewCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch((err) => { console.log(err) });
  }

  //Обработчик отображения большой картинки при клике на карточку
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  //Обработчики открытия попапов
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleConfirmDeleteClick(card) {
    setIsConfirmDeletePopupOpen(true);
    setRemoveCard(card);
  }

  //Обработчик закрытия попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDeletePopupOpen(false);
    setSelectedCard(null);
    setRemoveCard(null);
  }

  return (
    //«Внедряем» данные из currentUser с помощью провайдера контекста
    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">

        <Header />

        <Main onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          cards={cards}
          onCardDelete={handleConfirmDeleteClick} />

        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar} />

        <AddPlacePopup isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit} />

        <ImagePopup card={selectedCard}
          onClose={closeAllPopups} />

        <ConfirmDeletePopup isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          onSubmitDelete={handleCardDelete}
          card={removeCard} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
