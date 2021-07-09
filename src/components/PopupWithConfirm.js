import { Popup } from './Popup.js';

export class PopupWithConfirm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);

        this._submitCallback = submitCallback
        this._popupForm = this._popup.querySelector('.popup__form')
    }

    setConfirmHandler(submitCallback) {
        this._submitCallback = submitCallback
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', evt => {
            evt.preventDefault();
            this._submitCallback();
        })
    }
}