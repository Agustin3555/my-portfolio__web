export class ElementManager<
  DataKey extends string,
  T extends HTMLElement | null = HTMLElement,
> {
  element: T;
  data: Record<
    DataKey,
    {
      get: () => string | undefined;
      set: (value: string) => void;
    }
  >;

  constructor(element: T, dataKeys: DataKey[]) {
    this.element = element;

    this.data = dataKeys.reduce(
      (acc, key) => {
        acc[key] = {
          get: () => this.element?.dataset[key],
          set: (value) => this.element && (this.element.dataset[key] = value),
        };

        return acc;
      },
      {} as Record<
        DataKey,
        {
          get: () => string | undefined;
          set: (value: string) => void;
        }
      >,
    );
  }
}
