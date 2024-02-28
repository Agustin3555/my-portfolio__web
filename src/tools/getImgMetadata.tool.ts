import { type ImageMetadata } from "astro";

export type Folder = "about" | "skills" | "works";

/*
  "glob" necesita un literal como parametro, por lo tanto no se puedo
  refactorizar y usar los template string.
*/
const assets: Record<Folder, any> = {
  about: import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/about/*.{jpeg,jpg,png,gif,webp,svg}",
  ),
  skills: import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/skills/*.{jpeg,jpg,png,gif,webp,svg}",
  ),
  works: import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/works/*.{jpeg,jpg,png,gif,webp,svg}",
  ),
};

export const getImgMetadata = (folder: Folder, file: string) =>
  assets[folder][`/src/assets/${folder}/${file}`];

// Validación de los paths de las imágenes
export const validateImgMetadata = (folder: Folder, file: string) => {
  if (!getImgMetadata(folder, file))
    throw new Error(
      `"${file}" does not exist in glob: "src/assets/${folder}/"`,
    );
};
