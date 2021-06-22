import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, { submit }) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._submit = submit;

    }

    _getInputValues() {
        const inputsList = Array.from(this._popup.querySelectorAll('.popup__input'));
        const data = {};
        inputsList.forEach(input => {
            data[input.name] = input.value;
        })
        return data;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', this._submitEvtHandler);
    }

    _submitEvtHandler(evt) {
        evt.preventDefault();
        this._submit(this._getInputValues());
    }


    close() {
        super.close();
        this._popup.reset();
        this._popup.removeEventListener('submit', this._submitEvtHandler);
    }



}