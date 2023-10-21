export class ElementAttrManager {
  protected element: HTMLElement;
  protected attrKey: string;

  constructor(element: HTMLElement, attrKey: string) {
    this.element = element;
    this.attrKey = `data-${attrKey}`;
  }

  set(value: string) {
    const { element, attrKey } = this;

    element.setAttribute(attrKey, value);
  }

  get() {
    const { element, attrKey } = this;

    const value = element.getAttribute(attrKey);

    return value;
  }
}
