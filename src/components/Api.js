export default class Api {
    constructor(config) {

    }

    getCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/cards', {
                method: 'GET',
                headers: {
                    authorization: '664aaf42-3a4d-4948-aa52-e5498063f0fe',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    getApiUserInfo() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/users/me', {
                method: 'GET',
                headers: {
                    authorization: '664aaf42-3a4d-4948-aa52-e5498063f0fe',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    setApiUserInfo(newdata) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/users/me', {
                method: 'PATCH',
                headers: {
                    authorization: '664aaf42-3a4d-4948-aa52-e5498063f0fe',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: newdata.userName,
                    about: newdata.userAbout
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    postCards(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/cards', {
                method: 'POST',
                headers: {
                    authorization: '664aaf42-3a4d-4948-aa52-e5498063f0fe',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    link: data.link
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    deleteCard(data) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-25/cards/${data}`, {
                method: 'DELETE',
                headers: {
                    authorization: '664aaf42-3a4d-4948-aa52-e5498063f0fe',
                    'Content-Type': 'application/json'
                },
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    setAvatar(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/users/me/avatar', {
                method: 'PATCH',
                headers: {
                    authorization: '664aaf42-3a4d-4948-aa52-e5498063f0fe',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    avatar: data.userAvatar
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    setLike(data) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-25/cards/likes/${data}`, {
                method: 'PUT',
                headers: {
                    authorization: '664aaf42-3a4d-4948-aa52-e5498063f0fe',
                    'Content-Type': 'application/json'
                },
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    deleteLike(data) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-25/cards/likes/${data}`, {
                method: 'DELETE',
                headers: {
                    authorization: '664aaf42-3a4d-4948-aa52-e5498063f0fe',
                    'Content-Type': 'application/json'
                },
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

}