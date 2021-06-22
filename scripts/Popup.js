export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closePopupByOverlay = this._closePopupByOverlay.bind(this)
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            console.log(321);
            this.close();
        }
    }

    _closePopupByOverlay = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', this._closePopupByOverlay);
        this._popup.querySelector('.popup__close-button').addEventListener('click', () => this.close())

        console.log(123);
    }


    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    }

    сlose() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose);
    }

}