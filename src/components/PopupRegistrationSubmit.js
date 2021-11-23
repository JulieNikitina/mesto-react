import SuccessPath from '../images/registration-popup/success.png';
import ErrorPath from '../images/registration-popup/error.png';

function PopupRegistrationSubmit(props) {
  const popupClassName = props.isOpen ? "popup popup_active" : "popup";
  return (
    <div className={popupClassName} id={props.name} onClick={props.closeByOverlay}>
      <button className="popup__close-button" type="button" onClick={props.onClose}>
      </button>
      <div className="popup__container">
        <img className="" src={SuccessPath} alt="Успешная регистрация"/>
        <span>Вы успешно зарегистрировались!</span>
      </div>
    </div>
  );
}

export default PopupRegistrationSubmit;
