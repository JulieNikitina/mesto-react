function PopupWithForm(props) {
  const popupClassName = props.isOpen ? "popup popup_active" : "popup";
  return (
    <div className={popupClassName} id={props.name} onClick={props.closeByOverlay}>
      <button className="popup__close-button" type="button" onClick={props.onClose}>
      </button>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="form" name={`edit${props.name}`} noValidate>
            {props.children}
          <button className="form__submit-button" type="submit">{props.button}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
