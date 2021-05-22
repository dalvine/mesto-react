function ImagePopup({isOpen, onClose}) {
    return (
        <section className={`popup popup_content_photo ${isOpen?"popup_opened":null}`}>
            <div className="popup__photo-container">
                <img src="#" alt="#" className="popup__photo" />
                <p className="popup__caption"></p>
                <button type="button" className="popup__close popup__close_content_photo" onClick={onClose}></button>
            </div>
        </section>
    )
}

export default ImagePopup