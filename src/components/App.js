import logo from '../logo.svg';
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <div className="page">
      <Header/>
      <Main/>
      <Footer/>
      <PopupWithForm name="profileImageForm" title="Обновить аватар">
        <label className="form__field">
        <input id="profile-image-url-input" required className="form__input-field" type="url" name="photo"
               placeholder="Ссылка на аватар"/>
        <span className="profile-image-url-input-error form__input-error"/>
        </label>
      </PopupWithForm>
      <PopupWithForm name="profileForm" title="Редактировать профиль">
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
      <PopupWithForm name="addCardForm" title="Новое место">
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
      <div className="popup" id="viewPhoto">
        <button className="popup__close-button" type="button">
        </button>
        <img className="popup__photo" src='<%=require("./images/profile/profile-image.jpg")%>'
             alt="Описание изображения"/>
        <h3 className="popup__photo-caption"/>
      </div>
      //TODO форма подтвердить удаление?
      <PopupWithForm name="deleteImagePopup" title="Вы уверены?"/>

    </div>
  );
}

export default App;
