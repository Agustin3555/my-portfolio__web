export class ElementManager<Attrs extends string> {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  getData(key: Attrs) {
    const { element } = this;

    return element.dataset[key];
  }

  setData(key: Attrs, value: string) {
    const { element } = this;

    element.dataset[key] = value;
  }
}
