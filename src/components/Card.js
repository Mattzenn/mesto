class Card {
    constructor(data, cardSelector, { setLike, removeLike, handleCardClick, handleConfirmDelete }, userId) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._data = data;
        this._ownerId = data.owner._id; // юзер у карточки
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._setLike = setLike;
        this._removeLike = removeLike;
        this._handleConfirmDelete = handleConfirmDelete;
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
        this._image = this._element.querySelector('.elements__image')
    }

    _setEventListeners() {

        this._likeElement.addEventListener('click', () => {
            if (this._likeElement.classList.contains('elements__like-button_active')) {
                this._dislike(this._data);
            } else {
                this._like(this._data);
            }
        });

        this._element.querySelector('.elements__remove-button').addEventListener('click', () => { this._handleConfirmDelete(); });

        this._element.querySelector('.elements__image').addEventListener('click', () => {
            this._handleCardClick({
                name: this._name,
                src: this._link
            })
        });
    }

    handleCardDelete() {
        this._element.remove();
    }

    _removeLikedClass() {
        this._likeElement.classList.remove('elements__like-button_active');
    }

    _addLikedClass() {
        this._likeElement.classList.add('elements__like-button_active');
    }

    _dislike(data) {
        this._removeLikedClass();
        this._removeLike(data);
    }

    _like(data) {
        this._addLikedClass();
        this._setLike(data);
    }

    likeCount(data) {
        this._element.querySelector('.elements__like-count').textContent = data.likes.length
    }

    generateCard() {
        this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.elements__title').textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;

        this._element.querySelector('.elements__like-count').textContent = this._likes.length

        if (!(this._ownerId === this._userId)) {
            this._element.querySelector('.elements__remove-button').style.display = 'none'
        }

        if (this._likes.find((obj) => this._userId === obj._id)) {
            this._element.querySelector('.elements__like-button').classList.add('elements__like-button_active')
        }

        return this._element
    }

}

export default Card;