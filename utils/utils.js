// функции открыти и закрытия попапов

function openPopup(popup) {
    popup.classList.add('popup_opened');

    document.addEventListener('keyup', closePopupByEsc);
    popup.addEventListener('click', closePopupByOverlay);

}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', closePopupByEsc);
    popup.removeEventListener('click', closePopupByOverlay);
}

function closePopupByEsc(event) {
    if (event.key === 'Escape') {
        const openPop = document.querySelector('.popup_opened');
        closePopup(openPop);
    }
}

function closePopupByOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
}

export { openPopup, closePopup, closePopupByEsc, closePopupByOverlay };