import React from "react";
import "../index.css";


function ImagePopup() {
    return(
        <section className="popup popup_type_image">
  
    <div className="popup__content">
      <button className="popup__button-close popup__button-close_type_image" type="button"></button>
      <img className="popup__image" src="#" alt="#" />
      <h2 className="popup__title">Название изображения</h2>
    </div>
  </section>
    );
}

export default ImagePopup;