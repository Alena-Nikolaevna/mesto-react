import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";

//import Card from "./Card";
//import api from "../utils/api.js";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />

      <Main onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />

      <Footer />
      <ImagePopup card={selectedCard}
        onClose={closeAllPopups} />

      <PopupWithForm name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>

        <fieldset className='popup__form-input'>
          <input id="name-input" className="popup__form-item popup__form-item_type_name" type='text' placeholder='Имя' name='name' minLength="2" maxLength="40" required autoComplete="off" />
          <span className="name-input-error popup__form-item-error"></span>
        </fieldset>

        <fieldset className='popup__form-input'>
          <input id="about-input" className="popup__form-item popup__form-item_type_job" type='text' placeholder='О себе' name='about' minLength="2" maxLength="200" required autoComplete="off" />
          <span className="about-input-error popup__form-item-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm name="add-profile"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <fieldset className='popup__form-input'>
          <input id="title-input" className="popup__form-item popup__form-item_type_name" type='text' placeholder='Название' name="name" minLength="2" maxLength="30" required autoComplete="off" />
          <span className="title-input-error popup__form-item-error"></span>
        </fieldset>

        <fieldset className='popup__form-input'>
          <input id="link-input" className="popup__form-item popup__form-item_type_job" type='url' placeholder='Ссылка на картинку' name="link" required />
          <span className="link-input-error popup__form-item-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm name="confirm"
        title="Вы уверены?"
        buttonText="Да" />

      <PopupWithForm name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <fieldset className='popup__form-input'>
          <input id="link-avatar" className="popup__form-item popup__form-item_type_job" type='url' placeholder='Ссылка на картинку' name="link" required />
          <span className="link-avatar-error popup__form-item-error"></span>
        </fieldset>
      </PopupWithForm>

    </div>
  );
}

export default App;