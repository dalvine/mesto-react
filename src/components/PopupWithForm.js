function PopupWithForm({ title, name, children, isOpen, onClose}) {
    return (
        <section className={`popup popup_content_${name} ${isOpen?"popup_opened":null}`}>
            <div className="popup__container">
                <form className="form" name={name}>
                    <h2 className="form__header">{title}</h2>
                        {children}
                </form>
                <button type="button" className={`popup__close popup__close_content_${name}`} onClick={onClose}></button>
            </div>
        </section>
    )
}

export default PopupWithForm