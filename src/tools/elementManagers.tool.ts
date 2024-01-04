import { ElementManager } from "@/tools";

export const bodyManager = new ElementManager<
  "darkMode" | "verticalScroll" | "socialNetsInLeftNav" | "hamburgerMenuIsOpen"
>(window.document.body);
