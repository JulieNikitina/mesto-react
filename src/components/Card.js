import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = isOwn ? 'element__basket-button' : 'element__basket-button element__basket-button_hidden'
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = isLiked ? 'element__like-button element__like-button_active' : 'element__like-button'

  function handleClick() {
    props.handleClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <article className="element">
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}>
      </button>
      <img className="element__photo" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <div className="element__text-block">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-section">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}/>
          <span className="element__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
