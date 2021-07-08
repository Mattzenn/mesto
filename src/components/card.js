class Card {
    constructor(data, cardSelector, { handleCardClick }, userId) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._ownerId = data.owner._id; // юзер у карточки
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._userId = userId; // текущий юзер
    }

    _getTemplate() {
        const newCard = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.elements__card')
            .cloneNode(true);

        this._element = newCard;
        this._likeElement = this._element.querySelector('.elements__like-button')
        this._Image = this._element.querySelector('.elements__image')
    }

    _setEventListeners() {

        this._likeElement.addEventListener('click', () => { this._handleCardLike(); });

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
        this._likeElement.classList.toggle('elements__like-button_active');
    }


    generateCard() {
        this._getTemplate();
        this._setEventListeners();


        this._element.querySelector('.elements__title').textContent = this._name;
        this._Image.src = this._link;
        this._Image.alt = this._name;
        this._element.querySelector('.elements__like-count').textContent = this._likes.length

        if (!(this._ownerId === this._userId)) {
            this._element.querySelector('.elements__remove-button').style.display = 'none'
        }

        return this._element
    }
}

export default Card;