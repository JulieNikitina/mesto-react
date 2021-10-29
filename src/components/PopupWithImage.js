
function PopupWithImage() {
  return (
    <div className="popup" id="viewPhoto">
      <button className="popup__close-button" type="button">
      </button>
      <img className="popup__photo" src='<%=require("./images/profile/profile-image.jpg")%>'
           alt="Описание изображения"/>
      <h3 className="popup__photo-caption"/>
    </div>
  );
}

export default PopupWithImage;

