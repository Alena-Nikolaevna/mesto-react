import React from "react";
import "../index.css";

function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>

      <div className="popup__edit">
        <button className="popup__button-close popup__button-close_type_edit" type="button" onClick={props.onClose}></button>

        <form className="popup__form-edit-container" name={props.name} noValidate>
          <h2 className='popup__form-heading'>{props.title}</h2>

          {props.children}

          <button type="submit" className="popup__form-button-submit">{props.buttonText}</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;