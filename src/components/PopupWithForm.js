function PopupWithForm({ title, name, isOpen, onClose, children, buttonText }) {
    return (
        <section 
        className={`popup popup_content_${name} ${isOpen ? "popup_opened" : null}`}
        onClick={ () => {
            onClose()
        }
        }>
            <div 
            className="popup__container"
            onClick={
                function (evt) {
                    evt.stopPropagation()
                }}>
                <form className="form" name={name}>
                    <h2 className="form__header">{title}</h2>
                    {children}
                    <button className="form__button" type="submit">{buttonText}</button>
                </form>
                <button
                    type="button"
                    className={`popup__close popup__close_content_${name}`}
                    onClick={onClose}></button>
            </div>
        </section>
    )
}

export default PopupWithForm