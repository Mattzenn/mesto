import {
    initialCards,
    config,
    openPopupButton,
    profilePopup,
    closeProfilePopupButton,
    formElementInfoChange,
    nameInput,
    jobInput,
    profileName,
    profileJob,
    openPopupButtonСardAdd,
    popupСardAdd,
    closePopupButtonСardAdd,
    formElementСardAdd,
    placeNameInput,
    placeDescInput,
    placeCard,
    cardTemplate,
    inputList,
    subButton,
    openPopupZoom,
    popupZoom,
    closePopupZoom,
    popupImage,
    popupCaption,
    popupElTitel,
} from '../utils/constants.js';
import Card from './card.js';
import FormValidator from './FormValidator.js';
import { openPopup, closePopup } from '../utils/utils.js';



// 1) Функции связанные с созданием новой карты

// Функция добавления новой карты 
function createCard(item) {
    const card = new Card(item, '#card-template')
    return card.generateCard();
}

// создание карточек при загрузке страницы
initialCards.forEach(function(item) {
    const newCardItem = createCard(item);
    placeCard.prepend(newCardItem);
});


// создание карточек при указании значений
formElementСardAdd.addEventListener('submit', function(event) {
    event.preventDefault();

    const data = {};

    data.name = placeNameInput.value
    data.link = placeDescInput.value

    const newCardValue = createCard(data);
    placeCard.prepend(newCardValue);

    togglePopupСardAddClose();

    placeNameInput.value = "";
    placeDescInput.value = "";

    validatePhoto.enableValidation();
});

// функция открытия и закрытия попапа создания новой карты
function togglePopupСardAddOpen(event) {
    openPopup(popupСardAdd);
}

function togglePopupСardAddClose(event) {
    closePopup(popupСardAdd);
}

// 2) Работа функции изменения информации профиля

// функция открытия попапа для редактирования профиля
function openProfilePopup(event) {
    event.preventDefault();

    validateProfile.enableValidation();

    openPopup(profilePopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closeProfilePopup() {
    closePopup(profilePopup);
}

formElementInfoChange.addEventListener('submit', handleSubmitButton);

function handleSubmitButton(evt) {
    evt.preventDefault();

    // Вставляем новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup(profilePopup);
}

// 3) Закрытие попапа зума карточки

function togglePopupСardZoomClose() {
    closePopup(popupZoom);
}

// 4) Проверка валидности

const validateProfile = new FormValidator(config, formElementInfoChange);
const validatePhoto = new FormValidator(config, popupСardAdd);
validateProfile.enableValidation();
validatePhoto.enableValidation();

// 5) Обработчики событий

// попап для изменения профиля
openPopupButton.addEventListener('click', openProfilePopup);
closeProfilePopupButton.addEventListener('click', closeProfilePopup);

// попап для изменения профиля
openPopupButton.addEventListener('click', openProfilePopup);
closeProfilePopupButton.addEventListener('click', closeProfilePopup);

// попап для добавления новой карты
openPopupButtonСardAdd.addEventListener('click', togglePopupСardAddOpen);
closePopupButtonСardAdd.addEventListener('click', togglePopupСardAddClose);

// закрытие попапа зума карточки
closePopupZoom.addEventListener('click', togglePopupСardZoomClose);