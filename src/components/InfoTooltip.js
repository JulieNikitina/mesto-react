import SuccessPath from '../images/registration-popup/success.png';
import ErrorPath from '../images/registration-popup/error.png';

function InfoTooltip(props) {
  const popupClassName = props.isOpen ? "popup popup_active" : "popup";
  const imagePath = props.isSuccess ? SuccessPath : ErrorPath
  return (
    <div className={popupClassName} id="InfoTooltip" onClick={props.closeByOverlay}>
      <button className="popup__close-button" type="button" onClick={props.onClose}>
      </button>
      <div className="popup__container">
        <div className="popup__info">
          <img className="popup__logo" src={imagePath}/>
          <span className="popup__message">{props.message}</span>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
