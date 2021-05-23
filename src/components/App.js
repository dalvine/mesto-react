import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import { api } from '../utils/Api'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])
  const [selectedCard, setSelectedCard] = React.useState({})

  React.useEffect(() => {
    api.getUserInfo().then(({ name, about, avatar }) => {
      setUserName(name)
      setUserDescription(about)
      setUserAvatar(avatar)
    })
      .catch(err => console.log(err))
  }, []
  )

  React.useEffect(() => {
    api.getInitialCards().then(data => {
      setCards(data)
    })
      .catch(err => console.log(err))
  },
    []
  )

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

  return (
    <>
      <Header />
      <div className="loading-page"></div>
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        closeAllPopups={closeAllPopups}
        handleCardClick={setSelectedCard}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        userName={userName}
        userDescription={userDescription}
        userAvatar={userAvatar}
        cards={cards}
      />
      <PopupWithForm
        name="confirm-deletion"
        title="Вы уверены?"
        children={
          <button className="form__button" type="submit">Да</button>
        }
      />
      <PopupWithForm
        name="form-author"
        title="Редактировать профиль"
        children={
          <>
            <input className="form__input form__input_content_fullname" id="input-name" type="text" name="author-fullname"
              placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="form__input-error input-name-error"></span>
            <input className="form__input form__input_content_job" id="input-job" type="text" name="author-job"
              placeholder="Вид деятельности" minLength="2" maxLength="200" required />
            <span className="form__input-error input-job-error"></span>
            <button className="form__button" type="submit">Сохранить</button>
          </>
        }
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="add-place"
        title="Новое место"
        children={
          <>
            <input className="form__input form__input_content_name-place" id="input-name-place" type="text" name="namePlace"
              placeholder="Название" minLength="2" maxLength="30" required />
            <span className="form__input-error input-name-place-error"></span>
            <input className="form__input form__input_content_link-image" id="input-url-place" type="url" name="urlPlace"
              placeholder="Ссылка на картинку" required />
            <span className="form__input-error input-url-place-error"></span>
            <button className="form__button" type="submit">Создать</button>
          </>
        }
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        children={
          <>
            <input className="form__input form__input_content_link-avatar" id="input-url-avatar" type="url" name="urlAvatar"
              placeholder="Ссылка на аватар" required />
            <span className="form__input-error input-url-avatar-error"></span>
            <button className="form__button" type="submit">Сохранить</button>
          </>
        }
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />
      <template id="list-place">
      </template>
    </>
  );
}

export default App;
