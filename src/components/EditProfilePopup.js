import PopupWithForm from "./PopupWithForm";
import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser])

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(name, description);
  }

  return (
    <PopupWithForm
      name="profileForm"
      title="Редактировать профиль"
      button="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      closeByOverlay={props.closeByOverlay}
      onSubmit={handleSubmit}>
      <label className="form__field">
        <input id="name-input" required className="form__input-field" type="text" name="name" placeholder="Имя"
               minLength="2" maxLength="40" value={name} onChange={handleNameChange}/>
        <span className="name-input-error form__input-error"/>
      </label>
      <label className="form__field">
        <input id="description-input" required className="form__input-field" type="text" name="description"
               placeholder="О себе" minLength="2" maxLength="200" value={description}
               onChange={handleDescriptionChange}/>
        <span className="description-input-error form__input-error"/>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
