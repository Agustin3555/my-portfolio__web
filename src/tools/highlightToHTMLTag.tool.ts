/**
 * Convierte las palabras entre corchetes en un texto especificado por una etiqueta HTML.
 *
 * @param text - El texto que contiene las palabras entre corchetes.
 * @param HTMLTag - La etiqueta HTML para envolver las palabras resaltadas.
 * @returns El texto modificado con las palabras resaltadas.
 */
export const highlightToHTMLTag = (text: string, HTMLTag = "strong") => {
  const regex = /\[(.*?)\]/g;

  return text.replace(regex, `<${HTMLTag}>$1</${HTMLTag}>`);
};
