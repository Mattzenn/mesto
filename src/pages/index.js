import {
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
    openAvatarEditButton,
    popupAvatarEditPopup
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import Api from '../components/Api.js';
import './index.css';
import { PopupWithConfirm } from '../components/PopupWithConfirm.js';

const api = new Api();

// 1) Добавление новых карт при загрузке страницы

const createCard = (item) => {
    const card = new Card(item, '#card-template', {
            setLike: (data) => {
                api.setLike(data._id)
                    .then((data) => {
                        card.likeCount(data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            removeLike: (data) => {
                api.deleteLike(data._id)
                    .then((data) => {
                        card.likeCount(data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },

            handleCardClick: (data) => {
                popupFigure.open(data);
            },
            handleConfirmDelete: () => {
                confirmDeletePopup.open()

                confirmDeletePopup.setConfirmHandler(() => {
                    api.deleteCard(card._data._id)
                        .then(() => {
                            card.handleCardDelete()
                            confirmDeletePopup.close()
                        })
                        .catch((err) => console.log(err))
                })
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
    popupСardAddNew.Loading(true);
    api.postCards(newdata)
        .then((data) => {
            const card = createCard(data)
            const cardElement = card.generateCard()
            cardList.addItem(cardElement)

        })
        .catch((err) => console.log(err))
        .finally(() => {
            popupСardAddNew.Loading(false);

        })

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

// 4) Класс попа подтверждения удаления карты

const confirmDeletePopup = new PopupWithConfirm('.popup_confirm-delete');
confirmDeletePopup.setEventListeners();

// 4) Редактирование профиля через попап редактирования профиля {

const userInfo = new UserInfo({ name: '.profile__name', info: '.profile__about', avatar: '.profile__avatar', });

const popupEditProfile = new PopupWithForm('.popup_profile-edit', (newdata) => {
    popupEditProfile.Loading(true);
    api.setApiUserInfo(newdata)
        .then((data) => {
            userInfo.setUserInfo(data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupEditProfile.Loading(false);

        })

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

// редактирование аватара

const popupAvatarEdit = new PopupWithForm('.popup_avatar-edit', (newdata) => {
    popupAvatarEdit.Loading(true);
    api.setAvatar(newdata)
        .then((data) => {
            userInfo.setUserAvatar(data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
            popupAvatarEdit.Loading(false);

        })

    popupAvatarEdit.close();
});

popupAvatarEdit.setEventListeners()

openAvatarEditButton.addEventListener('click', () => {
    validateAvatar.enableValidation();
    popupAvatarEdit.open();
})

// 5) Валидация

const validateProfile = new FormValidator(config, formElementInfoChange);
validateProfile.enableValidation();
const validatePhoto = new FormValidator(config, popupСardAdd);
validatePhoto.enableValidation();
const validateAvatar = new FormValidator(config, popupAvatarEditPopup);
validateAvatar.enableValidation();

// 6) При открытии приложения

let userId

Promise.all([api.getCards(), api.getApiUserInfo()])
    .then(([cards, userData]) => {

        cardList.renderItems(cards);
        userInfo.setUserInfo(userData);
        userId = userData._id

    })
    .catch((err) => console.log(err));