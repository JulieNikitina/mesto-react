import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditProfilePopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm name="profileImageForm" title="Обновить аватар" button="Сохранить" isOpen={props.isOpen}
                   onClose={props.onClose} closeByOverlay={props.closeByOverlay} onSubmit={handleSubmit}>
      <label className="form__field">
        <input id="profile-image-url-input" required className="form__input-field" type="url" name="photo"
               placeholder="Ссылка на аватар" ref={avatarRef}/>
        <span className="profile-image-url-input-error form__input-error"/>
      </label>
    </PopupWithForm>)
}

export default EditProfilePopup;
