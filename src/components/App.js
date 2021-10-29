import logo from '../logo.svg';
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";
import React from "react";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true)
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen( false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
  }
  return (
    <div className="page">
      <Header/>
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
      <Footer/>
      <PopupWithForm name="profileImageForm" title="Обновить аватар" button="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="form__field">
        <input id="profile-image-url-input" required className="form__input-field" type="url" name="photo"
               placeholder="Ссылка на аватар"/>
        <span className="profile-image-url-input-error form__input-error"/>
        </label>
      </PopupWithForm>
      <PopupWithForm name="profileForm" title="Редактировать профиль" button="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <label className="form__field">
              <input id="name-input" required className="form__input-field" type="text" name="name" placeholder="Имя"
                     minLength="2" maxLength="40"/>
              <span className="name-input-error form__input-error"/>
            </label>
            <label className="form__field">
              <input id="description-input" required className="form__input-field" type="text" name="description"
                     placeholder="О себе" minLength="2" maxLength="200"/>
              <span className="description-input-error form__input-error"/>
            </label>
      </PopupWithForm>
      <PopupWithForm name="addCardForm" title="Новое место" button="Сохранить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <label className="form__field">
              <input id="title-input" required className="form__input-field" type="text" name="name"
                     placeholder="Название" minLength="3" maxLength="30"/>
              <span className="title-input-error form__input-error"/>
            </label>
            <label className="form__field">
              <input id="url-input" required className="form__input-field" type="url" name="link"
                     placeholder="Ссылка на картинку"/>
              <span className="url-input-error form__input-error"/>
            </label>
      </PopupWithForm>
      <PopupWithImage />
      <PopupWithForm name="deleteImagePopup" title="Вы уверены?" button="Да" onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
