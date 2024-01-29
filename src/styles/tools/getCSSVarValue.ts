import { COLOR, FONT, FONT_SIZE, TIME, NOT_FONT_SIZE } from "..";

export const getCSSVarValue = (
  varKey: string | FONT | FONT_SIZE | NOT_FONT_SIZE | COLOR | TIME,
) => {
  // Elimina "var(...)"
  const varName = varKey.slice(4, -1);

  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(varName);
};
