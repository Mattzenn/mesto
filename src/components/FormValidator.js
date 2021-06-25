class FormValidator {
    constructor(config, formElement) {
        this._formElement = formElement

        this._inputSelector = config.inputSelector
        this._inputErrorClass = config.inputErrorClass
        this._errorActiveClass = config.errorActiveClass
        this._submitButtonSelector = config.submitButtonSelector


        //найти все импуты
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));


        //поиск кнопки сабмита
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }

    _hideInputError = (inputElement) => {
        // спрятать ошибку
        // поиск элемента ошибки 
        const _errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        _errorElement.classList.remove(this._errorActiveClass);
        _errorElement.textContent = '';
    }

    _showInputError = (inputElement) => {
        // показать ошибку
        // поиск элемента ошибки 
        const _errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        _errorElement.classList.add(this._errorActiveClass);
        _errorElement.textContent = inputElement.validationMessage;
    }

    _checkInputValidity = (inputElement) => {
        //проверка валидности импута
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement);
        } else {
            this._showInputError(inputElement);
        }
    }

    _hazInvalidInput() {
        return this._inputList.some(inputElement => !inputElement.validity.valid)
    }

    _toggleButtonState() {
        if (this._hazInvalidInput(this._inputList)) {
            this._buttonElement.disabled = true
        } else {
            this._buttonElement.disabled = false;
        }
    }

    _setEventListeners() {

        // prevent page reload on form submit
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })


        //установить слушатели для каждого импута
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                // проверить валидность импута
                this._checkInputValidity(inputElement)
                this._toggleButtonState();
            })
        })

        this._toggleButtonState();
    }

    removeErrors() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        })
    }

    enableValidation() {
        this._setEventListeners();
    };
}

export default FormValidator;