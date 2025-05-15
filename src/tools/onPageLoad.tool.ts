export const onPageLoad = (callback: () => void) =>
  document.addEventListener("astro:page-load", callback);
