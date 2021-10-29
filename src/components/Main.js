function Main() {
  function handleEditAvatarClick() {
    const formEditPhotoProfile = document.querySelector('#profileImageForm');
    formEditPhotoProfile.classList.add('popup_active');
  }

  function handleEditProfileClick(){
    const formEditPhotoProfile = document.querySelector('#profileForm');
    formEditPhotoProfile.classList.add('popup_active');
  }
  function handleAddPlaceClick(){
    const formEditPhotoProfile = document.querySelector('#addCardForm');
    formEditPhotoProfile.classList.add('popup_active');
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__user-block">
          <div className="profile__photo-block" title="Изменить аватар">
            <img className="profile__photo" src='<%=require("./images/profile/profile-image.jpg")%>' alt="Аватар"/>
            <div className="profile__photo-overlay" onClick={handleEditAvatarClick}/>
          </div>
          <div className="profile__text-info">
            <h1 className="profile__name">Юля Никитина</h1>
            <button className="profile__edit-button" title="Редактировать профиль"
                    aria-label="Редактировать профиль" onClick={handleEditProfileClick}>
            </button>
            <p className="profile__description">Амбассадор Байкала</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить элемент" onClick={handleAddPlaceClick}>
        </button>
      </section>
      <section className="elements">
      </section>
    </main>
  );
}

export default Main;
