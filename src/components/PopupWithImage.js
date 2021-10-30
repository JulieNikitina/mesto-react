function PopupWithImage(props) {
  const popupClassName = props.isOpen ? "popup popup_active" : "popup";
  return (
    <div className={popupClassName} id="viewPhoto" onClick={props.closeByOverlay}>
      <button className="popup__close-button" type="button" onClick={props.onClose}>
      </button>
      <img className="popup__photo" src={props.card.link}
           alt={props.card.name}/>
      <h3 className="popup__photo-caption">{props.card.name}</h3>
    </div>
  );
}

export default PopupWithImage;

