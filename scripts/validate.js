const hideInputError = (formElement, inputElement, config) => {
    // спрятать ошибку
    // поиск элемента ошибки 
    const { inputErrorClass, errorActiveClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorActiveClass);
    errorElement.textContent = '';
}

const showInputError = (formElement, inputElement, config) => {
    // показать ошибку
    // поиск элемента ошибки 
    const { inputErrorClass, errorActiveClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorActiveClass);
}

const checkInputValidity = (formElement, inputElement, config) => {
    //проверка валидности импута
    console.log(inputElement.validity.valid);

    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement, config);
    } else {
        showInputError(formElement, inputElement, config);
    }
}

const hazInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid)
}

const toggleButtonState = (buttonElement, inputList) => {
    if (hazInvalidInput(inputList)) {
        buttonElement.disabled = true
    } else {
        buttonElement.disabled = false;
    }
}

const setEventListeners = (formElement, config) => {
    // prevent page reload on form submit
    const { inputSelector, submitButtonSelector, ...restConfig } = config;
    formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        //найти все импуты
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));


    //поиск кнопки сабмита
    const buttonElement = formElement.querySelector(submitButtonSelector);

    //установить слушатели для каждого импута
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            // проверить валидность импута
            checkInputValidity(formElement, inputElement, restConfig)
            toggleButtonState(buttonElement, inputList);
        })
    })

    toggleButtonState(buttonElement, inputList);
}

const enableValidation = (config) => {
    const { formSelector, ...restConfig } = config;
    // найти все формы
    const formList = Array.from(document.querySelectorAll(formSelector));

    // установаить слушатели
    formList.forEach((formElement) => {
        setEventListeners(formElement, restConfig);
    })
};