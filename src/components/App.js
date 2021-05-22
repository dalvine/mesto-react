import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {api} from '../utils/Api'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])
  // const [selectedCard, setSelectedCard] = React.useState('')

  React.useEffect(() => {
    api.getUserInfo().then(({name, about, avatar}) => {
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
    .catch(err => console.log(err))}, 
    []
  )



  return (
    <>
      <Header />
      <div className="loading-page"></div>
      <Main
        onEditProfile={function () { setIsEditProfilePopupOpen(true) }}
        onAddPlace={function () { setIsAddPlacePopupOpen(true) }}
        onEditAvatar={function () { setIsEditAvatarPopupOpen(true) }}
        closeAllPopups={function () {
          setIsEditProfilePopupOpen(false)
          setIsAddPlacePopupOpen(false)
          setIsEditAvatarPopupOpen(false)
          // setSelectedCard('')
        }}
        // handleCardClick={function() { setSelectedCard() }}
        // card={selectedCard}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        userName={userName}
        userDescription={userDescription}
        userAvatar={userAvatar}
        cards={cards}
      />
      <Footer />
      <template id="list-place">
      </template>
    </>
  );
}

export default App;
