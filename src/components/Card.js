import React from "react";

function Card(props) {
  function handleClick() {
    props.handleClick(props.card);
  }

  return (
    <article key={props.key} className="element">
      <button className="element__basket-button" type="button">
      </button>
      <img className="element__photo" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <div className="element__text-block">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-section">
          <button className="element__like-button" type="button"/>
          <span className="element__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
