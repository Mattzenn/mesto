export default class UserInfo {
    constructor(userSelectors) {
        this._profileName = document.querySelector(userSelectors.name)
        this._profileInfo = document.querySelector(userSelectors.info)
    }

    getUserInfo() {
        const data = {
            name: this._profileName.textContent,
            info: this._profileInfo.textContent
        }

        return data;
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._caption.textContent = data.info;
    }

}