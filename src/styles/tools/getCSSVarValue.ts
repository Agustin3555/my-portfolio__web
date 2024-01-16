import { COLOR, FONT, FONT_SIZE, MICROINT, NOT_FONT_SIZE } from "..";

export const getCSSVarValue = (
  varKey: string | FONT | FONT_SIZE | NOT_FONT_SIZE | COLOR | MICROINT,
) => {
  // Elimina "var(...)"
  const varName = varKey.slice(4, -1);

  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(varName);
};
