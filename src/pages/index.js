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
import Card from '../components/card.js';
import FormValidator from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import './index.css';

// 1) Добавление новых карт при загрузке страницы 

const createCard = (item) => {
    const card = new Card(item, '#card-template', {
        handleCardClick: (data) => {
            popupFigure.open(data);
        }
    });
    return card
}

const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        const card = createCard(item);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    },
}, placeCard);

cardList.renderItems();


// 2) Функционал добавления новой карты через попап

const popupСardAddNew = new PopupWithForm('.popup_card-add', (data) => {
    const card = createCard(data);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    popupСardAddNew.close();
});
popupСardAddNew.setEventListeners();

openPopupButtonСardAdd.addEventListener('click', () => {
    validatePhoto.enableValidation();
    popupСardAddNew.open()
})

// 3) Класс зума картинки 

const popupFigure = new PopupWithImage('.popup_zoom-image');
popupFigure.setEventListeners();



// 4) Редактирование профиля через попап редактирования профиля {

const userInfo = new UserInfo({ name: '.profile__name', info: '.profile__about' });

const formElementInfoChangeNew = new PopupWithForm('.popup_profile-edit', () => {
    userInfo.setUserInfo(nameInput, jobInput)
    formElementInfoChangeNew.close()

});

formElementInfoChangeNew.setEventListeners();

openPopupButton.addEventListener('click', () => {
    const userData = userInfo.getUserInfo()

    nameInput.value = userData.name
    jobInput.value = userData.info

    formElementInfoChangeNew.open()
})

// 5) Валидация

const validateProfile = new FormValidator(config, formElementInfoChange);
validateProfile.enableValidation();
const validatePhoto = new FormValidator(config, popupСardAdd);
validatePhoto.enableValidation();