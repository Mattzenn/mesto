const openPopupButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_profile-edit')
const closeProfilePopupButton = profilePopup.querySelector('.popup__close-button_profile-edit')
const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
//функция открытия и закрытия попапа
function togglePopup(popup) {
    popup.classList.toggle('popup_opened');
}

//попап для изменения профиля
openPopupButton.addEventListener('click', toggleProfilePopup);
closeProfilePopupButton.addEventListener('click', toggleProfilePopup);

// Находим форму и поля формы в DOM
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__input_user_name')
const jobInput = formElement.querySelector('.popup__input_user_description')

// Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');

//функция открытия попапа для редактирования профиля
function toggleProfilePopup(event) {
    event.preventDefault();
    togglePopup(profilePopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    // Вставляем новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    profilePopup.classList.toggle('popup_opened')
}

formElement.addEventListener('submit', formSubmitHandler);

//функция открытия формы добавления карточки

const openPopupButtonСardAdd = document.querySelector('.profile__add-button');
const popupСardAdd = document.querySelector('.popup_card-add')
const closePopupButtonСardAdd = document.querySelector('.popup__close-button_card-add')

openPopupButtonСardAdd.addEventListener('click', togglePopupСardAdd);
closePopupButtonСardAdd.addEventListener('click', togglePopupСardAdd);

function togglePopupСardAdd(event) {
    togglePopup(popupСardAdd);
}


// Находим форму в DOM
const formElementСardAdd = document.querySelector('.popup_card-add');
// Находим поля формы в DOM
const placeNameInput = formElementСardAdd.querySelector('.popup__input_place_name')
const placeDescInput = formElementСardAdd.querySelector('.popup__input_place_description')
const placeCard = document.querySelector('.elements')
const cardTemplate = document.querySelector('#card-template')


// Функция добавления новой карты 
function createCard(itemDataName, itemDataLink) {
    const newCard = cardTemplate.content.querySelector('.elements__card').cloneNode(true);
    const cardRemoveButton = newCard.querySelector('.elements__remove-button');
    const like = newCard.querySelector('.elements__like-button');
    const cardImage = newCard.querySelector('.elements__image');

    newCard.querySelector('.elements__title').textContent = itemDataName;
    cardImage.src = itemDataLink;
    cardImage.alt = itemDataName;;

    cardRemoveButton.addEventListener('click', function(event) {
        event.target.closest('.elements__card').remove();
    });

    like.addEventListener('click', () => like.classList.toggle('elements__like-button_active'));
    cardImage.addEventListener('click', () => togglePopupСardZoom(itemDataName, itemDataLink));

    return newCard
}


// создание карточек при загрузке страницы
initialCards.forEach(function(currentCard) {
    const newCardItem = createCard(currentCard.name, currentCard.link);
    placeCard.prepend(newCardItem);
});

// создание карточек при указании значений
formElementСardAdd.addEventListener('submit', function(event) {
    event.preventDefault();

    const placeNameValue = placeNameInput.value
    const placeDescValue = placeDescInput.value

    const newCardValue = createCard(placeNameValue, placeDescValue);
    placeCard.prepend(newCardValue);

    togglePopup(popupСardAdd);

    placeNameInput.value = ""
    placeDescInput.value = ""
});


const openPopupZoom = document.querySelector('.elements__image');
const popupZoom = document.querySelector('.popup_zoom-image');
//нужны значение которые мы получаем чтобы положить в форму - их нет сейчас
const closePopupZoom = document.querySelector('.popup__close-button_zoom-image');

//элементы, куда должны вставлены значения карточки
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const popupElTitel = document.querySelector('.elements__title');

//функция открытия зума карточки
function togglePopupСardZoom(name, link) {
    popupCaption.textContent = name;
    popupImage.src = link;
    togglePopup(popupZoom);
}

function togglePopupСardZoomClose() {
    togglePopup(popupZoom);
}

closePopupZoom.addEventListener('click', togglePopupСardZoomClose);