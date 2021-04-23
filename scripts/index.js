const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup')
const closePopupBoutton = document.querySelector('.popup__close-button')


openPopupButton.addEventListener('click', togglePopup);
closePopupBoutton.addEventListener('click', togglePopup);

// Находим форму в DOM
let formElement = document.querySelector('.popup__container'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_place_name')
let jobInput = formElement.querySelector('.popup__input_place_description') // Воспользуйтесь инструментом .querySelector()


// Выберите элементы, куда должны быть вставлены значения полей
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__about');

function togglePopup(event) {
    event.preventDefault();
    popup.classList.toggle('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault();

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    popup.classList.toggle('popup_opened')
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);