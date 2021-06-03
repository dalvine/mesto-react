import React from 'react'
import Card from './Card'
import api from '../utils/Api'
import Loader from './Loader'
import CurrentUserContext from '../contexts/CurrentUserContext';



function Main({ onEditAvatar, onEditProfile, onAddPlace, handleCardClick}) {


    const [cards, setCards] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
    api.getInitialCards()
      .then(value => {
        setCards(value)
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  }, []
  )

    return (
        <>
        <Loader isLoading={isLoading}/>
        <main className={`main ${isLoading ? "main_hidden" : null}`}>
            <section className="profile">
                <div className="author">
                    <div className="author__avatar">
                        <img src={currentUser.avatar} alt="Аватарка автора" className="author__avatar-image" />
                        <div className="author__avatar-layer" onClick={onEditAvatar}></div>
                    </div>
                    <h1 className="author__fullname">{currentUser.name}</h1>
                    <p className="author__job">{currentUser.about}</p>
                    <button type="button" className="author__button-edit" onClick={onEditProfile}></button>
                </div>
                <button type="button" className="profile__button-add" onClick={onAddPlace}></button>
            </section>
            <section className="places">
                <ul className="places__list">
                    {
                        cards.map(({ _id, ...arg }) => (<Card key={_id} card={arg} onCardClick={handleCardClick}/>))
                    }
                </ul>
            </section>
        </main>
        </>
    )
}

export default Main