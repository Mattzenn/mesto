import {
    // initialCards,
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
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import Api from '../components/Api.js';
import './index.css';

const api = new Api();

// 1) Добавление новых карт при загрузке страницы

const createCard = (item) => {
    const card = new Card(item, '#card-template', {
            handleCardClick: (data) => {
                popupFigure.open(data);
            }
        },
        userId
    );
    return card
}

const cardList = new Section({
    renderer: (item) => {
        const card = createCard(item);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    },
}, placeCard);



// 2) Функционал добавления новой карты через попап

const popupСardAddNew = new PopupWithForm('.popup_card-add', (newdata) => {
    console.log(newdata)
    api.postCards(newdata)
        .then((data) => {
            console.log(data)
            const card = createCard(data)
            const cardElement = card.generateCard()
            cardList.addItem(cardElement)

        })
        .catch((err) => console.log(err))

    popupСardAddNew.close();
});
popupСardAddNew.setEventListeners();

openPopupButtonСardAdd.addEventListener('click', () => {
    validatePhoto.removeErrors();
    validatePhoto.enableValidation();
    popupСardAddNew.open()
})

// 3) Класс зума картинки 

const popupFigure = new PopupWithImage('.popup_zoom-image');
popupFigure.setEventListeners();





// 4) Редактирование профиля через попап редактирования профиля {

const userInfo = new UserInfo({ name: '.profile__name', info: '.profile__about' });

const popupEditProfile = new PopupWithForm('.popup_profile-edit', (newdata) => {
    console.log(newdata.userName, newdata.userAbout)
    api.setApiUserInfo(newdata)
        .then((data) => {
            console.log(data)
            userInfo.setUserInfo(data);
        })
        .catch((err) => {
            console.log(err);
        })


    // userInfo.setUserInfo(nameInput, jobInput)
    popupEditProfile.close()

});

popupEditProfile.setEventListeners();

openPopupButton.addEventListener('click', () => {
    validateProfile.enableValidation();
    const userData = userInfo.getUserInfo()

    nameInput.value = userData.name
    jobInput.value = userData.info

    popupEditProfile.open()
})



// 5) Валидация

const validateProfile = new FormValidator(config, formElementInfoChange);
validateProfile.enableValidation();
const validatePhoto = new FormValidator(config, popupСardAdd);
validatePhoto.enableValidation();

let userId

// 6) При открытии приложения

Promise.all([api.getCards(), api.getApiUserInfo()])
    .then(([cards, userData]) => {

        cardList.renderItems(cards);
        userInfo.setUserInfo(userData);
        userId = userData._id

    })
    .catch((err) => console.log(err));

// Promise.all(initialData)
//     .then(([userData, cards]) => {
//       userId = userData._id;
//       userInfo.setUserInfo(userData);
//       userInfo.setUserAvatar(userData);
//       section.renderItems(cards.reverse());
//     })
//     .catch((err) => console.log(err));