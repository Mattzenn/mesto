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
import { Section } from './Section.js';
import { PopupWithForm } from './PopupWithForm.js';
import { PopupWithImage } from './PopupWithImage.js';
import { Popup } from './Popup.js';



// 1) Функции связанные с созданием новой карты

// const createCard = (item) => {
//     const card = new Card(item, '#card-template', {
//         handleCardClick: (data) => {
//             popupFigure.open(data);
//         },
//     });
//     const cardElement = card.generateCard();
//     return cardElement;
// }

// доп код
console.log(popupZoom);

const popupFigure = new PopupWithImage('.popup_zoom-image');
popupFigure.setEventListeners();


// 2) Добавление карты через класс
const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        const card = new Card(item, '#card-template', {
            handleCardClick: (data) => {
                popupFigure.open(data);
                console.log(data);
            }
        });
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    },
}, placeCard);


cardList.renderItems();


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
    open(popupСardAdd);
}

function togglePopupСardAddClose(event) {
    close(popupСardAdd);
}

// 2) Работа функции изменения информации профиля

// функция открытия попапа для редактирования профиля
function openProfilePopup(event) {
    event.preventDefault();

    validateProfile.enableValidation();

    open(profilePopup);
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

// function togglePopupСardZoomClose() {
//     closePopup(popupZoom);
// }

// 4) Проверка валидности

const validateProfile = new FormValidator(config, formElementInfoChange);
const validatePhoto = new FormValidator(config, popupСardAdd);
validateProfile.enableValidation();
validatePhoto.enableValidation();

// 5) Обработчики событий

// попап для изменения профиля
openPopupButton.addEventListener('click', openProfilePopup);
closeProfilePopupButton.addEventListener('click', closeProfilePopup);

// попап для добавления новой карты
openPopupButtonСardAdd.addEventListener('click', open(popupСardAdd));
closePopupButtonСardAdd.addEventListener('click', togglePopupСardAddClose);

// закрытие попапа зума карточки
// closePopupZoom.addEventListener('click', togglePopupСardZoomClose);