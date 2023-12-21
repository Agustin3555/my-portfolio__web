import { ElementAttrManager } from "@/tools";

export const darkModeBodyAttr = new ElementAttrManager(
  window.document.body,
  "dark-mode",
);

export const showSocialNetsInAboutAttr = new ElementAttrManager(
  window.socialNetsInAbout,
  "show",
);

export const showSocialNetsInLeftNavAttr = new ElementAttrManager(
  window.socialNetsInLeftNav,
  "show",
);
