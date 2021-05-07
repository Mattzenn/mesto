const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup_profile-edit')
const closePopupButton = document.querySelector('.popup__close-button')
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

//попап для изменения профиля
openPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);

// Находим форму и поля формы в DOM
const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__input_user_name')
const jobInput = formElement.querySelector('.popup__input_user_description')

// Выберите элементы, куда должны быть вставлены значения полей
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');

//функция открытия попапа для редактирования профиля
function togglePopup(event) {
    event.preventDefault();
    popup.classList.toggle('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    // Вставляем новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    popup.classList.toggle('popup_opened')
}

formElement.addEventListener('submit', formSubmitHandler);

//функция открытия формы добавления карточки

const openPopupButtonСardAdd = document.querySelector('.profile__add-button');
const popupСardAdd = document.querySelector('.popup_card-add')
const closePopupButtonСardAdd = document.querySelector('.popup__close-button_card-add')

openPopupButtonСardAdd.addEventListener('click', togglePopupСardAdd);
closePopupButtonСardAdd.addEventListener('click', togglePopupСardAdd);

function togglePopupСardAdd(event) {
    event.preventDefault();
    popupСardAdd.classList.toggle('popup_opened')
}


// Находим форму в DOM
const formElementСardAdd = document.querySelector('.popup_card-add');
// Находим поля формы в DOM
const placeNameInput = formElementСardAdd.querySelector('.popup__input_place_name')
const placeDescInput = formElementСardAdd.querySelector('.popup__input_place_description')
const placeCard = document.querySelector('.elements')
const cardTemplate = document.querySelector('#card-template')
const buttonAdd = formElementСardAdd.querySelector('.popup__button')


// Функция добавления новой карты 
function createCard(itemDataName, itemDataLink) {
    const newCard = cardTemplate.content.querySelector('.elements__card').cloneNode(true);
    const CardRemoveButton = newCard.querySelector('.elements__remove-button');
    const like = newCard.querySelector('.elements__like-button');
    const openPopupZoom = newCard.querySelector('.elements__image');

    newCard.querySelector('.elements__title').textContent = itemDataName;
    newCard.querySelector('.elements__image').src = itemDataLink;

    CardRemoveButton.addEventListener('click', function(event) {
        event.target.closest('.elements__card').remove();
    });

    like.addEventListener('click', () => like.classList.toggle('elements__like-button_active'));
    openPopupZoom.addEventListener('click', () => togglePopupСardZoom(itemDataName, itemDataLink));

    return newCard
}

formElementСardAdd.addEventListener('submit', createCard);

// создание карточек при загрузке страницы
initialCards.forEach(function(currentCard) {
    const NewCardItem = createCard(currentCard.name, currentCard.link);
    placeCard.prepend(NewCardItem);
});

// создание карточек при указании значений
buttonAdd.addEventListener('click', function(event) {
    event.preventDefault();

    const placeNameValue = placeNameInput.value
    const placeDescValue = placeDescInput.value

    const NewCardValue = createCard(placeNameValue, placeDescValue);
    placeCard.prepend(NewCardValue);

    popupСardAdd.classList.toggle('popup_opened')
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
    popupZoom.classList.toggle('popup_opened')
}

closePopupZoom.addEventListener('click', togglePopupСardZoom);