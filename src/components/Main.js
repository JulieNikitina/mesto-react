import React from "react";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <main>
      <section className="profile">
        <div className="profile__user-block">
          <div className="profile__photo-block" title="Изменить аватар">
            <img className="profile__photo" src={currentUser.avatar} alt="Аватар"/>
            <div className="profile__photo-overlay" onClick={props.onEditAvatar}/>
          </div>
          <div className="profile__text-info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" title="Редактировать профиль"
                    aria-label="Редактировать профиль" onClick={props.onEditProfile}>
            </button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить элемент" onClick={props.onAddPlace}>
        </button>
      </section>
      <section className="elements">
        {props.cards.map((card, i) => (
          <Card key={i} card={card} handleClick={props.onCardClick} onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}/>
        ))}
      </section>
    </main>
  );
}

export default Main;
