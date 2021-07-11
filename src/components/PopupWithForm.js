import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback

        this._popupForm = this._popup.querySelector('.popup__form')
        this._popupButton = this._popupForm.querySelector('.popup__button')
        this._popupButtonTextContent = this._popupButton.textContent
        this._inputsList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
    }

    _getInputValues() {

        const data = {}
        this._inputsList.forEach(inputElement => {
            data[inputElement.name] = inputElement.value;
        })
        return data
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', evt => {
            evt.preventDefault();
            this._submitCallback(this._getInputValues());
        })
    }

    close() {
        super.close();
        this._popupForm.reset();
    }

    renderLoading(dataLoading) {
        if (dataLoading) {
            this._popupButton.textContent = 'Сохранение...'
        } else {
            this._popupButton.textContent = this._popupButtonTextContent
        }
    }
}