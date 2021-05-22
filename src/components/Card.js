function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
      }   
    return (
        <li className="place">
            <img className="place__photo" src={card.link} alt={card.name} onClick={handleClick}/>
            <h2 className="place__title">{card.name}</h2>
            <div className="place__like-container">
                <button className="place__like"></button>
                <p className="place__like-count">{card.likes.length}</p>
            </div>
            <button className="place__delete"></button>
        </li>
    )
}

export default Card