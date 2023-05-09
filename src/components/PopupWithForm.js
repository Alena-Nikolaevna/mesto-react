import React from "react";
import "../index.css";

function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
  
    <div className="popup__edit">
      <button className="popup__button-close popup__button-close_type_edit" type="button" onClick={props.onClose}></button>

      <form className="popup__form-edit-container" name={props.name} novalidate>
            <h2 className='popup__form-heading'>{props.title}</h2>

     {props.children}
              
              <button type="submit" className="popup__form-button-submit">{props.buttonText}</button>
      </form>
    </div>
  </section>

    );
}

export default PopupWithForm;

/*<section className="popup popup_type_add-profile">
  <div className="popup__edit">
    <button className="popup__button-close popup__button-close_type_add" type="button"></button>

    <form className="popup__form-edit-container popup__form-edit-container_add" novalidate>
          <h2 className='popup__form-heading'>Новое место</h2>

          <fieldset className='popup__form-input'>
            <input id="title-input" className="popup__form-item popup__form-item_type_name" type='text' placeholder='Название' name="name" minlength="2" maxlength="30" required autocomplete="off" />
            <span className="title-input-error popup__form-item-error"></span>
          </fieldset>

          <fieldset className='popup__form-input'>
            <input id="link-input" className="popup__form-item popup__form-item_type_job" type='url' placeholder='Ссылка на картинку' name="link" required />
            <span className="link-input-error popup__form-item-error"></span>
          </fieldset>
            
            <button type="submit" className="popup__form-button-submit">Создать</button>
    </form>
  </div>
</section>


<section className="popup popup_type_confirm">
  
    <div className="popup__edit">
      <form className="popup__edit-form">
        <button className="popup__button-close popup__button-close_type_confirm" type="button"></button>
        <h2 className='popup__form-heading'>Вы уверены?</h2>
        <button type="submit" className="popup__form-button-submit">Да</button>
      </form>
    </div>
  </section>
  

  <section className="popup popup_type_avatar">
  
    <div className="popup__edit">
      <button className="popup__button-close popup__button-close_type_avatar" type="button"></button>
  
      <form className="popup__form-edit-container popup__form-edit-container_avatar" novalidate>
            <h2 className='popup__form-heading'>Обновить аватар</h2>

            <fieldset className='popup__form-input'>
              <input id="link-avatar" className="popup__form-item popup__form-item_type_job" type='url' placeholder='Ссылка на картинку' name="link" required />
              <span className="link-avatar-error popup__form-item-error"></span>
            </fieldset>
              
              <button type="submit" className="popup__form-button-submit">Сохранить</button>
      </form>
    </div>
  </section>*/