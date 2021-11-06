import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {
  const titleRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.addCard(titleRef.current.value, linkRef.current.value);
  }

  return (
    <PopupWithForm
      name="addCardForm"
      title="Новое место"
      button="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      closeByOverlay={props.closeByOverlay}
      onSubmit={handleSubmit}>
      <label className="form__field">
        <input id="title-input" required className="form__input-field" type="text" name="name"
               placeholder="Название" minLength="3" maxLength="30" ref={titleRef}/>
        <span className="title-input-error form__input-error"/>
      </label>
      <label className="form__field">
        <input id="url-input" required className="form__input-field" type="url" name="link"
               placeholder="Ссылка на картинку" ref={linkRef}/>
        <span className="url-input-error form__input-error"/>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
