export class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
    }

    // Рендер карточек

    renderItems(items) {
        items.reverse().forEach(item => this._renderer(item));
    }

    // Добавление карточки

    addItem(element) {
        this._container.prepend(element);
    }
}