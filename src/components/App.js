import React from 'react'
import api from '../utils/Api'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import CurrentUserContext from '../contexts/CurrentUserContext'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})
  const [currentUser, setСurrentUser] = React.useState({})


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  React.useEffect(() => {
    api.getUserInfo()
    .then(value => {
      setСurrentUser(value)
    })
  })

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
      <Header />
      
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        closeAllPopups={closeAllPopups}
        handleCardClick={setSelectedCard}
      />

      <PopupWithForm name="confirm-deletion" title="Вы уверены?" buttonText="Да"/>

      <PopupWithForm
        name="form-author"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <>
          <input className="form__input form__input_content_fullname" id="input-name" type="text" name="author-fullname"
            placeholder="Имя" minLength="2" maxLength="40" required />
          <span className="form__input-error input-name-error"></span>
          <input className="form__input form__input_content_job" id="input-job" type="text" name="author-job"
            placeholder="Вид деятельности" minLength="2" maxLength="200" required />
          <span className="form__input-error input-job-error"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        name="add-place"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <>
          <input className="form__input form__input_content_name-place" id="input-name-place" type="text" name="namePlace"
            placeholder="Название" minLength="2" maxLength="30" required />
          <span className="form__input-error input-name-place-error"></span>
          <input className="form__input form__input_content_link-image" id="input-url-place" type="url" name="urlPlace"
            placeholder="Ссылка на картинку" required />
          <span className="form__input-error input-url-place-error"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <>
          <input className="form__input form__input_content_link-avatar" id="input-url-avatar" type="url" name="urlAvatar"
            placeholder="Ссылка на аватар" required />
          <span className="form__input-error input-url-avatar-error"></span>
        </>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <Footer />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
