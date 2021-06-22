import { popupZoom, popupImage, popupCaption } from '../utils/constants.js';
// import { openPopup } from '../utils/utils.js';

class Card {
    constructor(data, cardSelector, { handleCardClick }) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const newCard = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.elements__card')
            .cloneNode(true);

        this._element = newCard;
    }

    _setEventListeners() {

        this._element.querySelector('.elements__like-button').addEventListener('click', () => { this._handleCardLike(); });

        this._element.querySelector('.elements__remove-button').addEventListener('click', () => { this._handleCardDelete(); });

        this._element.querySelector('.elements__image').addEventListener('click', () => {
            this._handleCardClick({
                name: this._name,
                src: this._link
            })
        });
    }

    _handleCardDelete() {
        this._element.remove();
    }

    _handleCardLike() {
        this._element.querySelector('.elements__like-button').classList.toggle('elements__like-button_active');
    }


    generateCard() {
        this._getTemplate();
        this._setEventListeners();


        this._element.querySelector('.elements__title').textContent = this._name;
        this._element.querySelector('.elements__image').src = this._link;
        this._element.querySelector('.elements__image').alt = this._name;

        return this._element
    }
}

export default Card;