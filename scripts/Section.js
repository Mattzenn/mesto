export class Section {
    constructor({ data, renderer }, containerSelector) {
        this._renderer = renderer;
        this._renderedItems = data;
        this._container = containerSelector;
    }

    // Рендер карточек

    renderItems() {
        this._renderedItems.forEach(item => this._renderer(item));
    }

    // Добавление карточки
    addItem(element) {
        this._container.prepend(element);
    }
}