export default class Api {
    constructor(config) {
        // this._url = config.url;
        // this._headers = config.headers;
    }

    getCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/cards', {
                method: 'GET',
                headers: {
                    authorization: '664aaf42-3a4d-4948-aa52-e5498063f0fe'
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
                    authorization: '664aaf42-3a4d-4948-aa52-e5498063f0fe'
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
        return fetch('https://mesto.nomoreparties.co/v1/cohort-25/cards/${data._id}', {
                method: 'DELETE',
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

    //     setLike(data) {
    //         return fetch(this._url + '/cards/likes/${data._id}', {
    //                 method: 'PUT',
    //                 headers: this._headers,
    //             })
    //             .then(res => {
    //                 if (res.ok) {
    //                     return res.json();
    //                 }

    //                 // если ошибка, отклоняем промис
    //                 return Promise.reject(`Ошибка: ${res.status}`);
    //             });
    //     }

    //     deleteLikeLike(data) {
    //         return fetch(this._url + '/cards/likes/${data._id}', {
    //                 method: 'DELETE',
    //                 headers: this._headers,
    //             })
    //             .then(res => {
    //                 if (res.ok) {
    //                     return res.json();
    //                 }

    //                 // если ошибка, отклоняем промис
    //                 return Promise.reject(`Ошибка: ${res.status}`);
    //             });
    //     }

    //     setAvatar(data) {
    //         return fetch(this._url + '/users/me/avatar', {
    //                 method: 'PATCH',
    //                 headers: this._headers,
    //                 body: JSON.stringify({
    //                     avatar: data.avatar
    //                 })
    //             })
    //             .then(res => {
    //                 if (res.ok) {
    //                     return res.json();
    //                 }

    //                 // если ошибка, отклоняем промис
    //                 return Promise.reject(`Ошибка: ${res.status}`);
    //             });
    //     }


}