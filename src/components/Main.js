import Card from './Card'



function Main(props) {


    return (
        <main className="main">
            <section className="profile">
                <div className="author">
                    <div className="author__avatar">
                        <img src={props.userAvatar} alt="Аватарка автора" className="author__avatar-image" />
                        <div className="author__avatar-layer" onClick={props.onEditAvatar}></div>
                    </div>
                    <h1 className="author__fullname">{props.userName}</h1>
                    <p className="author__job">{props.userDescription}</p>
                    <button type="button" className="author__button-edit" onClick={props.onEditProfile}></button>
                </div>
                <button type="button" className="profile__button-add" onClick={props.onAddPlace}></button>
            </section>
            <section className="places">
                <ul className="places__list">
                    {
                        props.cards.map(({ _id, ...arg }) => <Card key={_id} card={arg} onCardClick={props.handleCardClick}/>)
                    }
                </ul>
            </section>
        </main>
    )
}

export default Main