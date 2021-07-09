// составляющие попапа редактирования профиля
export const openPopupButton = document.querySelector('.profile__edit-button');
export const profilePopup = document.querySelector('.popup_profile-edit')
export const closeProfilePopupButton = profilePopup.querySelector('.popup__close-button_profile-edit')

// составляющие попапа редактирования профиля(поля)
export const formElementInfoChange = document.querySelector('.popup__container');
export const nameInput = formElementInfoChange.querySelector('.popup__input_user_name')
export const jobInput = formElementInfoChange.querySelector('.popup__input_user_description')

// поля для изменения значений профиля
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__about');

// составляющие попапа добавления карточки
export const openPopupButtonСardAdd = document.querySelector('.profile__add-button');
export const popupСardAdd = document.querySelector('.popup_card-add')
export const closePopupButtonСardAdd = document.querySelector('.popup__close-button_card-add')

// Находим форму в DOM
export const formElementСardAdd = document.querySelector('.popup_card-add');
// Находим поля формы в DOM
export const placeNameInput = formElementСardAdd.querySelector('.popup__input_place_name');
export const placeDescInput = formElementСardAdd.querySelector('.popup__input_place_description');
export const placeCard = document.querySelector('.elements');
export const cardTemplate = document.querySelector('#card-template');

// список импутов и кнопки сабмита
export const inputList = Array.from(formElementСardAdd.querySelectorAll('.popup__input'));
export const subButton = formElementСardAdd.querySelector('.popup__button');

// состаляющие зума карточки
export const openPopupZoom = document.querySelector('.elements__image');
export const popupZoom = document.querySelector('.popup_zoom-image');
export const closePopupZoom = document.querySelector('.popup__close-button_zoom-image');

//элементы, куда должны вставлены значения карточки
export const popupImage = document.querySelector('.popup__image');
export const popupCaption = document.querySelector('.popup__caption');

//откуда берется значение тайтла
export const popupElTitel = document.querySelector('.elements__title');

//элементы попапа редактирования аватара

export const openAvatarEditButton = document.querySelector('.profile__avatar-button');
export const popupAvatarEditPopup = document.querySelector('.popup_avatar-edit');

// Конфиг  для валидации

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__input-error_active',
    submitButtonSelector: '.popup__button',
};