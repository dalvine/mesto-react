import React from 'react'

function ImagePopup({ card, onClose }) {

    function handleEscPress(event) {
        if (event.keyCode === 27) {
            onClose()
        }
    }

    React.useEffect(() => {
        window.addEventListener('keydown', handleEscPress)

        return function () {
            window.removeEventListener('keydown', handleEscPress)
        }
    })

    return (
        <section
            className={`popup popup_content_photo ${card.name ? "popup_opened" : null}`
            }>
            <div className="popup__photo-container">
                <img
                    src={card.link ? card.link : '#'}
                    alt={card.name ? card.name : ''}
                    className="popup__photo"
                />
                <p className="popup__caption">{card.name}</p>
                <button
                    type="button"
                    className="popup__close popup__close_content_photo"
                    onClick={onClose}></button>
            </div>
        </section>
    )
}

export default ImagePopup