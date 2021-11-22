import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import React from "react";
import {projectApi} from "../utils/projectApi";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import {Route, Routes, Switch} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Test from "./SignIn";
import SignIn from "./SignIn";
import AuthForm from "./AuthForm";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isPopupWithImageOpen, setIsPopupWithImageOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    projectApi.getInitialCards()
      .then((resultInitialCards) => {
        setCards(resultInitialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    projectApi.getUserInfo()
      .then((resultUserInfo) => {
        setCurrentUser({
          name: resultUserInfo.name,
          about: resultUserInfo.about,
          avatar: resultUserInfo.avatar,
          _id: resultUserInfo._id
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    projectApi.handleLikeButton(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    projectApi.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter(obj => obj._id !== card._id))
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(name, about) {
    projectApi.patchUserInfo(name, about)
      .then((resultUserInfo) => {
        setCurrentUser({
          name: resultUserInfo.name,
          about: resultUserInfo.about,
          avatar: resultUserInfo.avatar,
          _id: resultUserInfo._id
        });
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(link) {
    projectApi.patchUserPhoto(link)
      .then((resultUserInfo) => {
        setCurrentUser({
          name: resultUserInfo.name,
          about: resultUserInfo.about,
          avatar: resultUserInfo.avatar,
          _id: resultUserInfo._id
        });
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlace(title, link) {
    projectApi.addNewCard(title, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
    setIsPopupWithImageOpen(true);
  }

  function closeOverlay(e) {
    if (e.target === e.currentTarget) {
      closeAllPopups();
    }
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPopupWithImageOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header/>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute redirectTo="./sign-up" loggedIn={false}>
                <Main
                  onEditAvatar={handleEditAvatarClick}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardClick={handleCardClick}
                  cards={cards}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                />
              </ProtectedRoute>
            }
          />
          <Route path="/sign-up" element={<AuthForm name="SignUp" title="Регистрация" button="Зарегистрироваться" isSignUp={true}/>}/>
          <Route path="/sign-in" element={<AuthForm name="SignIn" title="Вход" button="Войти" isSignUp={false}/>}/>
        </Routes>
        <Footer/>
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          closeByOverlay={closeOverlay}
          onUpdateAvatar={handleUpdateAvatar}/>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          closeByOverlay={closeOverlay}
          onUpdateUser={handleUpdateUser}/>
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          closeByOverlay={closeOverlay}
          addCard={handleAddPlace}/>
        <ImagePopup
          card={selectedCard}
          isOpen={isPopupWithImageOpen}
          onClose={closeAllPopups}
          closeByOverlay={closeOverlay}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
