import React from "react";
import {projectApi} from "../utils/projectApi";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([projectApi.getUserInfo(), projectApi.getInitialCards()])
      .then(([resultUserInfo, resultInitialCards]) => {
        setUserName(resultUserInfo.name);
        setUserDescription(resultUserInfo.about);
        setUserAvatar(resultUserInfo.avatar);
        setCards(resultInitialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__user-block">
          <div className="profile__photo-block" title="Изменить аватар">
            <img className="profile__photo" src={userAvatar} alt="Аватар"/>
            <div className="profile__photo-overlay" onClick={props.onEditAvatar}/>
          </div>
          <div className="profile__text-info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" title="Редактировать профиль"
                    aria-label="Редактировать профиль" onClick={props.onEditProfile}>
            </button>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить элемент" onClick={props.onAddPlace}>
        </button>
      </section>
      <section className="elements">
        {cards.map((card, i) => (
          <Card key={i} card={card} handleClick={props.onCardClick}/>
        ))}
      </section>
    </main>
  );
}

export default Main;
