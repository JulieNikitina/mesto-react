import logo from './logo.svg';
import './index.css';

function App() {
  return (
      <div className="page">
        <header className="header">
          <img className="header__logo" src='<%=require("./images/header/header-logo.svg")%>' alt="Лого"/>
        </header>
        <main>
          <section className="profile">
            <div className="profile__user-block">
              <div className="profile__photo-block" title="Изменить аватар">
                <img className="profile__photo" src='<%=require("./images/profile/profile-image.jpg")%>' alt="Аватар"/>
                  <div className="profile__photo-overlay"/>
              </div>
              <div className="profile__text-info">
                <h1 className="profile__name">Юля Никитина</h1>
                <button className="profile__edit-button" title="Редактировать профиль"
                        aria-label="Редактировать профиль">
                </button>
                <p className="profile__description">Амбассадор Байкала</p>
              </div>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить элемент">
            </button>
          </section>
          <section className="elements">
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
        </footer>
        <div className="popup" id="profileImageForm">
          <button className="popup__close-button" type="button">
          </button>
          <div className="popup__container">
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="form" name="editProfileImageForm" noValidate>
              <label className="form__field">
                <input id="profile-image-url-input" required className="form__input-field" type="url" name="photo"
                       placeholder="Ссылка на аватар"/>
                  <span className="profile-image-url-input-error form__input-error"/>
              </label>
              <button className="form__submit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup" id="profileForm">
          <button className="popup__close-button" type="button">
          </button>
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="form" name="popupEditForm" noValidate>
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
              <button className="form__submit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup" id="addCardForm">
          <button className="popup__close-button" type="button">
          </button>
          <div className="popup__container">
            <h2 className="popup__title">Новое место</h2>
            <form className="form" name="popupAddCardForm" noValidate>
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
              <button className="form__submit-button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup" id="viewPhoto">
          <button className="popup__close-button" type="button">
          </button>
          <img className="popup__photo" src='<%=require("./images/profile/profile-image.jpg")%>'
               alt="Описание изображения"/>
            <h3 className="popup__photo-caption"/>
        </div>
        <div className="popup" id="deleteImagePopup">
          <button className="popup__close-button" type="button">
          </button>
          <div className="popup__container">
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="form" name="popupAddCardForm" noValidate>
              <button id="confirmationButton" className="form__submit-button" type="submit">Да</button>
            </form>
          </div>
        </div>

      </div>
  );
}

export default App;
