import { ElementManager } from "@/tools";

export const bodyManager = new ElementManager(window.document.body, [
  "darkMode",
  "socialNetsLocation",
]);

export const hamburgerMenuManager = new ElementManager(
  window.document.querySelector<HTMLElement>("#hamburger-menu"),
  ["isOpen"],
);
