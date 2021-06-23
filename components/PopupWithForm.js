import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback

        this._popupForm = this._popup.querySelector('.popup__form')
    }

    _getInputValues() {

        const inputsList = Array.from(this._popupForm.querySelectorAll('.popup__input'));

        const data = {}
        inputsList.forEach(inputElement => {
            data[inputElement.name] = inputElement.value;
        })
        console.log(data);
        return data

    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', evt => {
            evt.preventDefault()
            this._submitCallback(this._getInputValues())
        })
    }


    close() {
        super.close();
        this._popupForm.reset();
    }



}