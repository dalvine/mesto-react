import React from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup({ isOpen, onClose, onAddCard, isLoadingForm, formRef}) {
    const [link, setLink] = React.useState('')
    const [name, setName] = React.useState('')
    const inputLinkPlaceRef = React.useRef()
    const inputNamePlaceRef = React.useRef()

    function handleSubmit(e) {
        e.preventDefault();
        onAddCard({link, name});
    }

    function changeInputName() {
        setName(inputNamePlaceRef.current.value)
    }

    function changeInputLink() {
        setLink(inputLinkPlaceRef.current.value)
    }

    function close() {
        inputNamePlaceRef.current.value = ''
        inputLinkPlaceRef.current.value = ''
        onClose()
    }


    return (
        <PopupWithForm
            name="add-place"
            title="Новое место"
            isOpen={isOpen}
            onClose={close}
            buttonText="Создать"
            buttonLoadingText="Сохранение..."
            onSubmit={handleSubmit}
            isLoadingForm={isLoadingForm}
            formRef = {formRef}
        >
            <>
            <input ref={inputNamePlaceRef} onChange={changeInputName} className="form__input form__input_content_name-place" id="input-name-place" type="text" name="namePlace"
              placeholder="Название" minLength="2" maxLength="30" required />
            <span className="form__input-error input-name-place-error"></span>
            <input ref={inputLinkPlaceRef} onChange={changeInputLink} className="form__input form__input_content_link-image" id="input-url-place" type="url" name="urlPlace"
              placeholder="Ссылка на картинку" required />
            <span className="form__input-error input-url-place-error"></span>
          </>
        </PopupWithForm>
    )
}

export default AddPlacePopup