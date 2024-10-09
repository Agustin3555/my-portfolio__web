export const $ = <E extends Element = Element>(query: string) =>
  window.document.querySelector<E>(query);

export const $$ = <E extends Element = Element>(query: string) =>
  window.document.querySelectorAll<E>(query);
