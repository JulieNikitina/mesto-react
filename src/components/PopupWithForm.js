function PopupWithForm(props) {
  return (
    <div className="popup" id={props.name}>
      <button className="popup__close-button" type="button">
      </button>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="form" name={`edit${props.name}`} noValidate>
            {props.children}
          <button className="form__submit-button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  )
    ;
}

export default PopupWithForm;
