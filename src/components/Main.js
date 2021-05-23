import React from 'react'
import Card from './Card'
import api from '../utils/api'



function Main({ onEditAvatar, onEditProfile, onAddPlace, handleCardClick }) {

    const [userName, setUserName] = React.useState('')
    const [userDescription, setUserDescription] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
    const main = document.querySelector('.main')
    const isLoadingPageFigure = document.querySelector('.loading-page')
    main.classList.add('main_hidden')
    isLoadingPageFigure.classList.add('loading-page_visible')
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(value => {
        const [cardData, { name, about, avatar }] = value
        setUserName(name)
        setUserDescription(about)
        setUserAvatar(avatar)
        setCards(cardData)
      })
      .catch(err => console.log(err))
      .finally(() => {
        main.classList.remove('main_hidden')
        isLoadingPageFigure.classList.remove('loading-page_visible')
      })
  }, []
  )

    return (
        <main className="main">
            <section className="profile">
                <div className="author">
                    <div className="author__avatar">
                        <img src={userAvatar} alt="Аватарка автора" className="author__avatar-image" />
                        <div className="author__avatar-layer" onClick={onEditAvatar}></div>
                    </div>
                    <h1 className="author__fullname">{userName}</h1>
                    <p className="author__job">{userDescription}</p>
                    <button type="button" className="author__button-edit" onClick={onEditProfile}></button>
                </div>
                <button type="button" className="profile__button-add" onClick={onAddPlace}></button>
            </section>
            <section className="places">
                <ul className="places__list">
                    {
                        cards.map(({ _id, ...arg }) => <Card key={_id} card={arg} onCardClick={handleCardClick}/>)
                    }
                </ul>
            </section>
        </main>
    )
}

export default Main