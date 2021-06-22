import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)

        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupCaption = this._popup.querySelector('.popup__caption');
    }

    open(data) {
        console.log(data);
        this._popupImage.src = data.src;
        this._popupImage.alt = data.name;
        this._popupCaption.textContent = data.name;
        super.open()
        console.log(data);
    }
}