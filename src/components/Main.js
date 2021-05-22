import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import Card from './Card'



function Main(props) {


    return (
        <main className="main">
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
                isOpen={props.isEditProfilePopupOpen}
                onClose={props.closeAllPopups}
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
                isOpen={props.isAddPlacePopupOpen}
                onClose={props.closeAllPopups}
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
                isOpen={props.isEditAvatarPopupOpen}
                onClose={props.closeAllPopups}
            />
            <ImagePopup />
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
                        props.cards.map(({id, ...props}) => <Card key={id} card={props}/>)
                    }
                </ul>
            </section>
        </main>
    )
}

export default Main